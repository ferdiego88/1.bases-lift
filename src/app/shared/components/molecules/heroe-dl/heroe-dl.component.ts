import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-dl',
  templateUrl: './heroe-dl.component.html',
  styleUrls: ['./heroe-dl.component.scss']
})
export class HeroeDlComponent {

  @Input() name = 'Ironman';
  age = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName():void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
