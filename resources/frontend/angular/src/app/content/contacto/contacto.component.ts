import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  respuesta : any

  contactoForm !: FormGroup

  constructor(private apiService : ApiService , private fb : FormBuilder , private router : Router , private alertService : AlertasService){

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

          console.log("Mensaje correcto")

          this.alertService.mostrarAlerta("El mensaje ha sido enviado." , 3000 , true);

        }else if (this.respuesta.status == "error"){

          this.alertService.mostrarAlerta("El mensaje no ha podido ser enviado." , 3000 , false);
        }

      });

    } else {

      return;

    }
  }

}
