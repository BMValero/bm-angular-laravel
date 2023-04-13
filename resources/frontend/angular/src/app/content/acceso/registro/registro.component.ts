import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LocationStrategy  } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  usuarioFormRegistro!: FormGroup;
  title = "";
  respuesta : any;

  constructor(private loginService : LoginService , private fb : FormBuilder , private router : Router , private locationStrategy : LocationStrategy){

    this.usuarioFormRegistro = this.fb.group({

      nombre : ['',Validators.required],
      apellidos : ['',Validators.required],
      ciudad : ['',Validators.required],
      cp : ['',[Validators.required, Validators.pattern(/^\d{5}$/)]],
      direccion : ['',Validators.required],
      telefono : ['',[Validators.required, Validators.pattern(/^\d{9}$/)]],
      email : ['',[Validators.required, Validators.email]],
      password : ['',Validators.required]

    });
  }

  ngOnInit(): void {}

  registro(){

    if (this.usuarioFormRegistro.valid){

      let credenciales : object = {

        "nombre" : `${this.usuarioFormRegistro.controls['nombre'].value}`,
        "apellidos" : `${this.usuarioFormRegistro.controls['apellidos'].value}`,
        "ciudad" : `${this.usuarioFormRegistro.controls['ciudad'].value}`,
        "cp" : `${this.usuarioFormRegistro.controls['cp'].value}`,
        "direccion" : `${this.usuarioFormRegistro.controls['direccion'].value}`,
        "telefono" : `${this.usuarioFormRegistro.controls['telefono'].value}`,
        "email" : `${this.usuarioFormRegistro.controls['email'].value}`,
        "password" : `${this.usuarioFormRegistro.controls['password'].value}`

      }

      let objetoLogin = {
        email : `${this.usuarioFormRegistro.controls['email'].value}`,
        password : `${this.usuarioFormRegistro.controls['password'].value}`

      }

      this.loginService.registrarUsuario(credenciales).subscribe(res => {

        this.respuesta = res;

        if(this.respuesta.status == "ok"){
          //TODO : AÑADIR NOTIFICACIÓN SLIDE DE USUARIO CREADO
          this.login(objetoLogin.email , objetoLogin.password)
        }else if (this.respuesta.status == "error"){
          //TODO : AÑADIR NOTIFICACIÓN SLIDE DE EMAIL YA EXISTE
          window.location.reload()
        }

      });

    } else {

      return;

    }
  }

  login(email : string , password : string){

      let credenciales : object = {

        "email" : `${email}`,
        "password" : `${password}`

      }

      this.loginService.obtenerTokenLogin(credenciales).subscribe(res => {

        this.respuesta = res;

        if(this.respuesta.status == "ok"){
            localStorage.setItem("token", this.respuesta.token);

            setTimeout(() => {
              location.reload();
            }, 100);
  
            this.router.navigate(['/'])
        }

      });

  }
}