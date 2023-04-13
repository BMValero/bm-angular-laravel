import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-dropdown',
  templateUrl: './login-dropdown.component.html',
  styleUrls: ['./login-dropdown.component.scss']
})
export class LoginDropdownComponent implements OnInit{

  usuarioFormDropdown!: FormGroup;
  title = "";
  respuesta : any;

  constructor(private loginService : LoginService , private fb : FormBuilder){

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

      this.loginService.obtenerTokenLogin(credenciales).subscribe(res => {

        this.respuesta = res;

        if(this.respuesta.status == "ok"){
          localStorage.setItem("token", this.respuesta.token);
          localStorage.setItem("nombre", this.respuesta.nombre);
          window.location.reload();
        }

      });

    } else {

      return;

    }
  }
}
