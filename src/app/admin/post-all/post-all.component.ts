import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../sysgen/local.service';

@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrl: './post-all.component.css'
})
export class PostAllComponent implements OnInit {
  products: any;
  page: any;
  pages: any;

  constructor(private http: LocalService) { }

  ngOnInit() {
    this.pageLoad(1);
  }

  reload(pNum: any) {
    let destPage = this.page + pNum;

    // If reaching the beginning from the last page, or reaching the end from the first page
    if ((destPage < 1 && this.page === 1) || (destPage > this.pages && this.page === this.pages)) {
        destPage = (destPage < 1) ? this.pages : 1;
    }

    // Otherwise, if within the valid range, load the page
    if (destPage >= 1 && destPage <= this.pages) {
        this.pageLoad(destPage);
    }
}

  pageLoad(start: any) {
    this.http.getPaginatePost(start, 30).subscribe(
      response => {
        if (response.con) {
          // console.log(response.msg);
          this.products = response.msg.docs;
          // console.log("doc:",response.msg.docs);
          this.pages = response.msg.totalPages;
          // console.log("pages",response.msg.totalPages);
          this.page = response.msg.page;
          // console.log("page",response.msg.page);
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
