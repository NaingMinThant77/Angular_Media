import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../sysgen/local.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Loki } from '../../sysgen/loki';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: any;

  constructor(private http: LocalService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
    })
  }

  startLogin(data: any) {
    this.http.loginUserNow(data).subscribe(
      response => {
        // console.log(response)
        if (response.con) {
          Loki.save(response.token)
          this.http.changeAuth(true);
          this.router.navigate(['admin'])
        }
      }, error => {
        console.log(error)
      }
    )
  }

}

// marco@gmail.com
// 123123