import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  private alertSource = new Subject();
  alert$ = this.alertSource.asObservable();

  constructor() { }

  mostrarAlerta(mensaje:string , tiempo : number = 5000 , correcta : boolean){
    this.alertSource.next({mensaje, tiempo , correcta});
  }
}
