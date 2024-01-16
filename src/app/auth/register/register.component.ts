import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalService } from '../../sysgen/local.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  form: any;

  constructor(private http: LocalService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
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

  startRegister(data: any) {
    this.http.registerUserNow(data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}

