import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.component.html',
  styleUrls: ['./vehicle-management.component.scss'],
})
export class VehicleManagementComponent implements OnInit {
  show: any;
  hide: any;

  constructor() {}

  ngOnInit(): void {
    this.show = true;
    this.hide = false;
  }
  hide1() {
    this.show = false;
    this.hide = true;
  }
}
