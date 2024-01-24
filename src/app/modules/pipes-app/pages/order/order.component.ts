import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {

  variable = 1;

  public isUpperCase = false;



  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

 }
