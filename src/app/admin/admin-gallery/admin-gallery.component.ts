import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../sysgen/local.service';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrl: './admin-gallery.component.css'
})
export class AdminGalleryComponent implements OnInit {
  images: any;

  constructor(private http: LocalService) { }

  ngOnInit(): void {
    this.http.getALlAdminGallery().subscribe(
      response => {
        if (response.con) {
          console.log(response.msg);
          this.images = response.msg;
        } else {
          alert(response.msg)
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  copyImage(image: any) {
    let copyImage = 'http://localhost:3000/uploads/' + image;
    let input = document.createElement('input');
    input.value = copyImage;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy')
    document.body.removeChild(input);
  }
}
