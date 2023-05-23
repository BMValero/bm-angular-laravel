import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})

export class FacturacionComponent {

  datosCliente = {
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      direccion_entrega: {
        nombre: "",
        apellidos: "",
        telefono: "",
        ciudad: "",
        cp: "",
        direccion: ""
      },
      direccion_facturacion: {
        nombre: "",
        apellidos: "",
        telefono: "",
        ciudad: "",
        cp: "",
        direccion: ""
      }
  }

  constructor(private dataService : DataService , private apiService : ApiService){


    this.dataService.getDatosCliente().subscribe((datos) => {

      this.datosCliente = datos

    })

  }

  modificarDatosCliente(){

    const token : string|null = localStorage.getItem("token")

    let objetoDatos : object = {
      "tipoModificacion" : "facturacion",
      "nombre": `${this.datosCliente.direccion_facturacion.nombre}`,
      "apellidos": `${this.datosCliente.direccion_facturacion.apellidos}`,
      "telefono": `${this.datosCliente.direccion_facturacion.telefono}`,
      "ciudad": `${this.datosCliente.direccion_facturacion.ciudad}`,
      "cp": `${this.datosCliente.direccion_facturacion.cp}`,
      "direccion": `${this.datosCliente.direccion_facturacion.direccion}`
    }

    //TODO : AÑADIR NOTIFICACIÓN SLIDER DE SI SE HAN MODIFICADO CORRECTAMENTE O SI HA HABIDO ERROR

    this.apiService.modificarDatosCliente(objetoDatos,token).subscribe((res) => console.log(res))

  }

}
