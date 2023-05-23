import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gestion-pedidos',
  templateUrl: './gestion-pedidos.component.html',
  styleUrls: ['./gestion-pedidos.component.scss']
})
export class GestionPedidosComponent {

  pedidos : any

  constructor(private apiService : ApiService){

    this.apiService.obtenerPedidos().subscribe((res) => {

      this.pedidos = res;

    })

  }

}
