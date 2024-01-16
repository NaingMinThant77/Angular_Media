import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../sysgen/local.service';

@Component({
  selector: 'app-history-home',
  templateUrl: './history-home.component.html',
  styleUrl: './history-home.component.css'
})
export class HistoryHomeComponent implements OnInit {
  his: any;

  constructor(private http: LocalService) {
  }

  ngOnInit() {
    this.http.getAllHistory().subscribe(
      response => {
        if (response.con) {
          this.his = response.msg;
        }
      },
      error => {
        console.error(error);
      }
    );
  }

}
