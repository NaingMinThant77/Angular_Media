import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from '../sysgen/local.service';
import {Cart} from '../sysgen/Cart';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  id: any;
  products: any;
  loadShow = false;

  constructor(private route: ActivatedRoute, private http: LocalService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadShow = true;
    this.http.getCatDetailProduct(this.id).subscribe(
      response => {
        if (response.con) {
          console.log(response.msg)
          this.products = response.msg
          this.loadShow = false;
        } else {
          // alert(response.msg)
        }
      }, error => {
        console.log(error)
      }
    )
  }

  addToCart(product: any) {
    // Cart.resetDB();
    Cart.saveDBItem(product);
    this.http.cartChange(true);
  }

}
