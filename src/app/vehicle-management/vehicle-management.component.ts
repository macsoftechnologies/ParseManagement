import { Component, OnInit } from '@angular/core'
import { ColorSketchModule } from 'ngx-color/sketch'
import { ColorEvent } from 'ngx-color'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.component.html',
  styleUrls: ['./vehicle-management.component.scss'],
})
export class VehicleManagementComponent implements OnInit {
  show: any
  hide: any

  constructor() {}

  ngOnInit(): void {
    this.show = true
    this.hide = false
  }
  hide1() {
    this.show = false
    this.hide = true
  }
  handleChange($event: ColorEvent) {
    console.log($event.color)
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
  }
  // imagePath: any;
  // imgURL: any;
  // imgURL1: any;
  // imgURL2: any;
  // imgURL3: any;
  // message: any;
  // files: any;

  // preview(files: string | any) {
  //   if (files.length === 0) return;

  //   var mimeType = files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.message = 'Only images are supported.';
  //     return;
  //   }

  //   var reader = new FileReader();
  //   this.imagePath = files;
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = (_event) => {
  //     this.imgURL = reader.result;
  //   };
  // }

  // imageDeleteFrom!: FormGroup;
  // imageurls = [];
  // base64String: string | undefined;

  // name: any;
  // i: any;
  // event: any;
  // imagePath: any;

  // removeImageEdit(i: any, imagepath: any): void {
  //   this.imageDeleteFrom.value.id = i;
  //   this.imageDeleteFrom.value.ImagePath = imagepath;
  // }

  // removeImage(i: number) {
  //   this.imageurls.splice(i, 1);
  // }
  // onSelectFile(event: { target: any }) {
  //   if (event.target.files && event.target.files[0]) {
  //     var filesAmount = event.target.files.length;
  //     for (let i = 0; i < filesAmount; i++) {
  //       var reader = new FileReader();
  //       reader.onload = (event: any) => {
  //         this.imageurls.push({ $base64String: event.target.result });
  //       };
  //       reader.readAsDataURL(event.target.files[i]);
  //     }
  //   }
  // }

  // urls: any;
  urls: any[] = []
  index: any
  imageDeleteFrom!: FormGroup
  imagePath: any
  RemoveImage: boolean = false

  selectFiles(event: any) {
    if (event.target.files) {
      for (var i = 0; i < File.length; i++) {
        var reader = new FileReader()
        reader.readAsDataURL(event.target.files[i])
        reader.onload = (event: any) => {
          this.urls.push(event.target.result)
          this.RemoveImage = true
        }
      }
    } else this.RemoveImage = false
  }
  removeSelectedFile(index: any) {
    this.urls.splice(index, 1)
  }
}
