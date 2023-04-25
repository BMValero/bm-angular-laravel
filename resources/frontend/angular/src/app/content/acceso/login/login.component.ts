import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationStrategy  } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  usuarioFormLogin!: FormGroup;
  title = "";
  respuesta : any;

  constructor(private apiService : ApiService , private fb : FormBuilder , private router : Router , private locationStrategy : LocationStrategy ){

    this.usuarioFormLogin = this.fb.group({

      email : ['',[Validators.required, Validators.email]],
      password : ['',Validators.required]

    });
  }

  ngOnInit(): void {}

  login(){

    if (this.usuarioFormLogin.valid){

      let credenciales : object = {

        "email" : `${this.usuarioFormLogin.controls['email'].value}`,
        "password" : `${this.usuarioFormLogin.controls['password'].value}`

      }

      this.apiService.obtenerTokenLogin(credenciales).subscribe(res => {

        this.respuesta = res;

        if(this.respuesta.status == "ok"){

          localStorage.setItem("token", this.respuesta.token);
          localStorage.setItem("nombre", this.respuesta.nombre);

          setTimeout(() => {
            location.reload();
          }, 100);

          this.router.navigate(['/'])



        } else if (this.respuesta.status == "error") {
          //TODO CREAR NOTIFICACIÓN SLIDE DE USUARIO O CONTRASEÑA INCORRECTOS
        }

      });

    } else {

      return;

    }    
  }
}
