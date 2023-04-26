import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login-dropdown',
  templateUrl: './login-dropdown.component.html',
  styleUrls: ['./login-dropdown.component.scss']
})
export class LoginDropdownComponent implements OnInit{

  usuarioFormDropdown!: FormGroup;
  title = "";
  respuesta : any;

  constructor(private apiService : ApiService , private fb : FormBuilder , private router : Router){

    this.usuarioFormDropdown = this.fb.group({

      email : ['',[Validators.required, Validators.email]],
      password : ['',Validators.required]

    });
    
  }

  ngOnInit(): void {}

  login(){

    if (this.usuarioFormDropdown.valid){

      let credenciales : object = {

        "email" : `${this.usuarioFormDropdown.controls['email'].value}`,
        "password" : `${this.usuarioFormDropdown.controls['password'].value}`

      }

      this.apiService.obtenerTokenLogin(credenciales).subscribe(res => {

        this.respuesta = res;

        if(this.respuesta.status == "ok"){

          localStorage.setItem("token", this.respuesta.token);
          localStorage.setItem("nombre", this.respuesta.nombre);

          if(this.respuesta.admin){

            localStorage.setItem("admin", this.respuesta.admin);

          }

          setTimeout(() => {
            location.reload();
          }, 100);

          this.router.navigate(['/'])

        } else if (this.respuesta.status == "error"){
          //TODO CREAR NOTIFICACIÓN SLIDE DE USUARIO O CONTRASEÑA INCORRECTOS
        }

      });

    } else {

      return;

    }
  }
}
