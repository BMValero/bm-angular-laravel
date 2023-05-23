import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  respuesta : any

  contactoForm !: FormGroup

  constructor(private apiService : ApiService , private fb : FormBuilder , private router : Router){

    this.contactoForm = this.fb.group({

      nombre : ['',Validators.required],
      telefono : ['',[Validators.required, Validators.pattern(/^\d{9}$/)]],
      email : ['',[Validators.required, Validators.email]],
      mensaje : ['' , Validators.required]
    });

  }

  contactar(){

    if (this.contactoForm.valid){

      let objContacto : object = {

        "nombre" : `${this.contactoForm.controls['nombre'].value}`,
        "telefono" : `${this.contactoForm.controls['telefono'].value}`,
        "email" : `${this.contactoForm.controls['email'].value}`,
        "mensaje" : `${this.contactoForm.controls['mensaje'].value}`

      }

      this.apiService.enviarMensajeContacto(objContacto).subscribe(res => {

        this.respuesta = res;

        console.log(this.respuesta)

        if(this.respuesta.status == "ok"){
          //TODO : AÑADIR NOTIFICACIÓN SLIDE DE ENVIADO CON ÉXITO
        }else if (this.respuesta.status == "error"){
          //TODO : AÑADIR NOTIFICACIÓN SLIDE DE FALLO AL ENVIAR
        }

      });

    } else {

      return;

    }
  }

}
