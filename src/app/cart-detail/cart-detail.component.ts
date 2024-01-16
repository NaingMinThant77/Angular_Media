import { Component, OnInit } from '@angular/core';
import { LocalService } from '../sysgen/local.service';
import { Router } from '@angular/router';
import { Cart } from '../sysgen/Cart';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css'
})
export class CartDetailComponent implements OnInit {
  products: any;
  grandTotal = 0;

  constructor(private http: LocalService, private router: Router) {
  }

  ngOnInit() {
    this.products = Cart.getDBItems();
    this.products.forEach((product: any) => {
      this.grandTotal += product.price * product.count;
    });
  }

  reduct(product: any, num: any) {
    if (num != -1) {
      Cart.reduce(product, num);
      this.ngOnInit();
    } else {
      if (product.count > 1) {
        Cart.reduce(product, num);
        this.ngOnInit();
      }
    }
  }

  deleteProduct(product: any) {
    Cart.deleteProduct(product);
    this.ngOnInit(); // refresh
  }

  billOut() {
    let items = Cart.getDBItems();
    // console.log(items) //{'123' : 2, '401' : 3 }
    let orderProducts: any = [];
    items.forEach((product: any) => {
      let key = product._id;
      let value = product.count;
      let obj: any  = {};
      obj[key] = value;
      orderProducts.push(obj);
    });
    console.log(orderProducts)

    let formData = new FormData();
    formData.append('uid', '1');
    formData.append('ords', JSON.stringify(orderProducts));

    this.http.postOrder(formData).subscribe(
      response => {
        // console.log(response)
        if (response.con) {
          Cart.resetDB();
          this.http.cartChange(true);
          this.router.navigate(['']);
        }
      },
      error => {
        console.error(error);
      }
    );
  }

}