import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  classList: any;
  constructor() {}

  ngOnInit(): void {}
  showMenu() {
    $('.menu').classList.toggle('open-menu');
    $('.open-icon').classList.toggle('close-icon');
  }
}
