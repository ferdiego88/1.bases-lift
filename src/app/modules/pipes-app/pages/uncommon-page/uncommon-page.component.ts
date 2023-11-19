import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss']
})
export class UncommonPageComponent {
  //i18n Select
  public name = 'Fernando';
  public gender :'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }


  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }


  //i18nPlural

  public clients = ['Maria', 'Pedro', 'Eduardo', 'Melissa', 'Alejandra', 'Rosa', 'Gianluca'];
  public clientMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient() {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: '36',
    address: 'Turin, Italy'
  }


  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap',value))
  )

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {

  setTimeout(() => {
    resolve('Tenemos la data en la promesa');
    console.log('Tenemos la data en la promesa');

  }, 3500);
  })
}
