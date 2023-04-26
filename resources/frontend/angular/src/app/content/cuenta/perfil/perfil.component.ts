import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})


export class PerfilComponent implements OnInit{

  constructor(private router: Router , private apiService : ApiService, private dataService : DataService){

    const token : string|null = localStorage.getItem("token")

    this.apiService
    .obtenerDatosCliente(token)
    .subscribe((datos) => {

      this.dataService.setDatosCliente(datos)

    })

  }

  ngOnInit(): void {

    if(this.router.url == "/cuenta/perfil"){
      this.router.navigate(['/cuenta/perfil/credenciales'])
    }

  }

}
