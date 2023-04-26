import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private datosCliente = new BehaviorSubject<any>(null);

  setDatosCliente(objeto: any) {
    this.datosCliente.next(objeto);
  }

  getDatosCliente() {
    return this.datosCliente.asObservable();
  }

}
