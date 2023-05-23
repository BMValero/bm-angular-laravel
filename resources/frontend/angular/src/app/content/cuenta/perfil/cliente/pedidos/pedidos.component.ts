import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent {

  usuario : any
  mensajePedidos = ""

  constructor(private apiService : ApiService){

    const token : string|null = localStorage.getItem("token")

    this.apiService.obtenerPedidosCliente(token).subscribe((res) => {

      this.usuario = res;

      if (this.usuario){
        this.mensajePedidos = "Pedidos"
      } else {
        this.mensajePedidos = "No hay pedidos"
      }

    })

  }

}
