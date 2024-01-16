import { Component, OnInit } from '@angular/core';
import { LocalService } from '../sysgen/local.service';
import { Router } from '@angular/router';
import { Loki } from '../sysgen/loki';
import { Cart } from '../sysgen/Cart';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  isAuth: any;
  cartCount = 0;

  constructor(private http: LocalService, private router: Router) { }

  ngOnInit(): void {
    this.http.authBool.subscribe(
      response => {
        this.isAuth = response
      }
    )
    this.http.isCartBool.subscribe(
      response => {
        this.cartCount = Cart.getDBItems().length;
      });
  }

  logoutUser() {
    Loki.remove();
    this.router.navigate(['/']);
    this.http.changeAuth(false)
  }

}
