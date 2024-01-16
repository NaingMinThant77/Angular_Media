import { Component, OnInit } from '@angular/core';
import { LocalService } from '../sysgen/local.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  cats: any;
  loadShow = false;

  constructor(private http: LocalService) { }

  ngOnInit(): void {
    this.loadShow = true;
    this.http.getAllCats().subscribe(response => {
      // console.log(response)
      if (response.con) {
        this.cats = response.msg;
        this.loadShow = false;
      }
    }, error => {
      console.log(error)
    })
  }
}