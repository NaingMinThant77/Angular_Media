import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../sysgen/local.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent implements OnInit {
  postForm: any;
  cats: any;

  constructor(private http: LocalService, private router: Router) {}

  ngOnInit() {
    this.http.getAllCats().subscribe(
      response => {
        if (response.con) {
          this.cats = response.msg;
        }
      },
      error => {
        console.error(error);
      }
    );
    this.postForm = new FormGroup({
      'cat_id': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'image': new FormControl('', Validators.required),
      'desc': new FormControl('', Validators.required),
    });
  }

  startPost(data: any) {
    console.log(data)
    this.http.postCreate(data).subscribe(
      response => {
        console.log(response)
        if (response.con) {
          console.log(response.msg);
          alert('Post Created!');
          this.router.navigate(['/admin/post/all']);
        } else {
          alert('Post Creation Fail!');
        }
      },
      error => {
        console.error(error);
      }
    );
  }
}
