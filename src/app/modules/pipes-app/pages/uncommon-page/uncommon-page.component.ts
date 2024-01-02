import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss']
})
export class UncommonPageComponent {

  //i18n Select
  public name = 'Fernando';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male' : 'invitarlo',
    'female': 'invitarla'
  }



  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }


  // i18nPlural

  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Melissa', 'Eduardo', 'Natalia', 'Juan'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }


  deleteClient() {
    this.clients.shift();
  }

}
