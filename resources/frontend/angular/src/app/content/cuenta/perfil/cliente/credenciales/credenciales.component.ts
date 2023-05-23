import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-credenciales',
  templateUrl: './credenciales.component.html',
  styleUrls: ['./credenciales.component.scss']
})
export class CredencialesComponent {

  datosClienteForm !: FormGroup;

  passwordNueva = "";
  passwordCliente = "";

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

constructor(private dataService : DataService , private apiService : ApiService, private fb : FormBuilder){

  this.datosClienteForm = this.fb.group({

    email : ['',[Validators.required, Validators.email]],
    telefono : ['' ,[Validators.required, Validators.pattern(/^\d{9}$/)]],
    passwordActual : ['', Validators.required]

  });


  this.dataService.getDatosCliente().subscribe((datos) => {

    this.datosCliente = datos

  })

}

modificarDatosCliente(){

  if(this.datosClienteForm.valid){

    const token : string|null = localStorage.getItem("token")

    let objetoDatos : object = {
      "tipoModificacion" : "acceso",
      "passwordNueva" : `${this.passwordNueva}`,
      "passwordCliente" : `${this.passwordCliente}`,
      "email": `${this.datosCliente.email}`,
      "telefono": `${this.datosCliente.telefono}`,
    }

    //TODO : AÑADIR NOTIFICACIÓN SLIDER DE SI SE HAN MODIFICADO CORRECTAMENTE O SI HA HABIDO ERROR

    this.apiService.modificarDatosCliente(objetoDatos,token).subscribe((res) => console.log(res))

    } else{

      return;

    }

}

}
