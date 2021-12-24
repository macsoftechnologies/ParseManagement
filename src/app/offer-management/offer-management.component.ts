import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-offer-management',
  templateUrl: './offer-management.component.html',
  styleUrls: ['./offer-management.component.scss'],
})
export class OfferManagementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  imagePath: any;
  imgURL: any;
  message: any;
  files: any;

  preview(files: string | any): void {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }
  urls: any[] = [];
  index: any;
  imageDeleteFrom!: FormGroup;
  // imagePath: any;
  RemoveImage: boolean = false;

  selectFiles(event: any) {
    if (event.target.files) {
      for (var i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
          this.RemoveImage = true;
        };
      }
    } else this.RemoveImage = false;
  }
  removeSelectedFile(index: any) {
    this.urls.splice(index, 1);
  }
}
