import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.scss'],
})
export class StockManagementComponent implements OnInit {
  public currentNumber: any = 0;
  constructor() {}

  ngOnInit(): void {}
  increment() {
    this.currentNumber++;
  }
  decrement() {
    this.currentNumber--;
  }
}
