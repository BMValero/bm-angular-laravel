import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit{

  //TODO : DEFINIR VARIABLES DEL OBJETO

  constructor(private router: Router){}

  ngOnInit(): void {
    if(this.router.url == "/cuenta/perfil"){
      this.router.navigate(['/cuenta/perfil/credenciales'])
    }

    //TODO : SUSCRIBIRSE AL SERVICIO Y OBTENER LOS DATOS DEL USUARIO

  }

}
