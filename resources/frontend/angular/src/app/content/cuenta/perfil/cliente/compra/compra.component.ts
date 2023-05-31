import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
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

  constructor(private fb : FormBuilder , private apiService : ApiService, private router: Router, private alertService : AlertasService){

    this.pagoForm = this.fb.group({

      metodoPago : ['stripe', Validators.required],
      metodoEnvio : ['mrw' , Validators.required]

    });

    this.token = localStorage.getItem("token")

    if(this.token){

      this.apiService.obtenerDatosCliente(this.token).subscribe((res) => {

        this.datosCliente = res

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
        "productos" : `${this.productosPedidoNombreYTalla}`,
        "coste_total" : `${this.costeTotal}`
      }

      this.apiService.realizarPedido(objPedido).subscribe((res : any) => {

        if(res.status == "ok"){

          localStorage.removeItem("cesta")
          localStorage.removeItem("costeTotal")

          setTimeout(() => {
            location.reload();
          }, 100);

          this.router.navigate([`/cuenta/perfil/pedidos/${res.pedido_id}`])

        } else if( res.status == "error"){

          this.alertService.mostrarAlerta(`No hay suficiente stock del producto : ${res.producto}` , 10000 , false);

        }

      })

    }

  }
}
