import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menuIcon() {
    document.querySelector(".main-menu")?.classList.toggle("open-menu");
    document.querySelector(".close-icon")?.classList.toggle("main-menu");

    // let Newmenu = document.querySelector(".main-menu").classList.toggle("open-menu")
  }
}
