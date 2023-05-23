import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.scss']
})
export class EnvioComponent {

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
    "tipoModificacion" : "entrega",
    "nombre": `${this.datosCliente.direccion_entrega.nombre}`,
    "apellidos": `${this.datosCliente.direccion_entrega.apellidos}`,
    "telefono": `${this.datosCliente.direccion_entrega.telefono}`,
    "ciudad": `${this.datosCliente.direccion_entrega.ciudad}`,
    "cp": `${this.datosCliente.direccion_entrega.cp}`,
    "direccion": `${this.datosCliente.direccion_entrega.direccion}`
  }

  //TODO : AÑADIR NOTIFICACIÓN SLIDER DE SI SE HAN MODIFICADO CORRECTAMENTE O SI HA HABIDO ERROR

  this.apiService.modificarDatosCliente(objetoDatos,token).subscribe((res) => console.log(res))

}

}
