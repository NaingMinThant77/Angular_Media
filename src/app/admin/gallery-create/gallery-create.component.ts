import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LocalService } from '../../sysgen/local.service';
import { Router } from '@angular/router';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-gallery-create',
  templateUrl: './gallery-create.component.html',
  styleUrl: './gallery-create.component.css'
})
export class GalleryCreateComponent implements OnInit {

  ngOnInit() {
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private sanitizer: DomSanitizer, private http: LocalService, private router: Router) { }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl!);
    console.log(this.croppedImage)
    // event.blob can be used to upload the cropped image
  }

  imageLoaded(image: LoadedImage) {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

  uploadImage() {
    if (this.croppedImage) {
      this.dataUrlToFile(this.croppedImage, this.imageChangedEvent.target.files[0].name).then(file => {
        const formData: any = new FormData();
        formData.append('image', file, file.name);

        // console.log(formData);
        this.http.uploadImage(formData).subscribe(
          response => {
            if (response.con) {
              this.router.navigate(['admin/gallery']);
            }
          },
          error => {
            console.log(error);
          }
        );
      }).catch(error => {
        console.error('Failed to convert cropped image to File.', error);
      });
    } else {
      console.log('No cropped image to upload.');
    }
  }

  private async dataUrlToFile(dataUrl: SafeUrl, filename: string): Promise<File> {
    const response = await fetch(dataUrl.toString());
    const blob = await response.blob();
    return new File([blob], filename);
  }
  
}
