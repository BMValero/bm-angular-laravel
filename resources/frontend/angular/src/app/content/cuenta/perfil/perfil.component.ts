import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})


export class PerfilComponent implements OnInit{

  admin = false

  constructor(private router: Router , private apiService : ApiService, private dataService : DataService){

    const token : string|null = localStorage.getItem("token")

    this.apiService
    .obtenerDatosCliente(token)
    .subscribe((datos) => {

      this.dataService.setDatosCliente(datos)

    })

  }

  ngOnInit(): void {

    const admin = localStorage.getItem("admin")

    if(admin != null){
      this.admin = true
    }

    if(this.router.url == "/cuenta/perfil" && this.admin == false){
      this.router.navigate(['/cuenta/perfil/credenciales'])
    }

    if(this.router.url == "/cuenta/perfil" && this.admin == true){
      this.router.navigate(['/cuenta/perfil/gestion-usuarios'])
    }

  }


}
