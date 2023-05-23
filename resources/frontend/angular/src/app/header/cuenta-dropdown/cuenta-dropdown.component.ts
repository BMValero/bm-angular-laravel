import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta-dropdown',
  templateUrl: './cuenta-dropdown.component.html',
  styleUrls: ['./cuenta-dropdown.component.scss']
})
export class CuentaDropdownComponent {

  constructor(private router : Router){}

  nombre = "";
  admin = false

  ngOnInit(): void {

    const nombre = localStorage.getItem('nombre')

    const admin = localStorage.getItem('admin')
    
    if (nombre != null){
      this.nombre = nombre
    }

    if (admin != null){
      this.admin = true
    }
  
  }

  logOut(){

    //TODO : BORRAR EL TOKEN DE LA BASE DE DATOS

    localStorage.removeItem("token");

    const controlAdmin = localStorage.getItem("admin");

    if (controlAdmin != null){

      localStorage.removeItem("admin");

    }

    this.router.navigate(['/'])
  }

}
