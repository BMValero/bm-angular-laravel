import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent {

  token : string
  cesta : string

  pagoForm : FormGroup

  datosCliente : any
  cantidadProductos = 0
  productosPedidoNombreYTalla : any
  costeTotal = "0"

  constructor(private fb : FormBuilder , private apiService : ApiService){

    this.pagoForm = this.fb.group({

      metodoPago : ['stripe', Validators.required],
      metodoEnvio : ['mrw' , Validators.required]

    });

    this.token = localStorage.getItem("token")

    if(this.token){

      this.apiService.obtenerDatosCliente(this.token).subscribe((res) => {

        this.datosCliente = res

        console.log(this.datosCliente)

      })

    }

    this.cesta = localStorage.getItem("cesta")

    if(this.cesta){

      let nombreYTallaProductosCesta = this.cesta.split("///")

      this.cantidadProductos = nombreYTallaProductosCesta.length

      this.productosPedidoNombreYTalla = nombreYTallaProductosCesta

    }

    this.costeTotal = localStorage.getItem("costeTotal")

  }

  pagar(){

    if(this.pagoForm.valid && this.cesta && this.token && this.cantidadProductos > 0){

      let objPedido = {

        "token_usuario" : `${this.token}`,
        "productos" : `${this.productosPedidoNombreYTalla}`

      }

      this.apiService.realizarPedido(objPedido).subscribe((res) => {

        console.log(res)

      })

    }

  }
}
