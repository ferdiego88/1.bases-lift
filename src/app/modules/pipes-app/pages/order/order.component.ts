import { Component } from '@angular/core';
import { Color, Hero } from '@app/shared/interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {

  variable = 1;

  public isUpperCase = false;
  public orderBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly:true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    },
  ]


  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }


  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }


 }
