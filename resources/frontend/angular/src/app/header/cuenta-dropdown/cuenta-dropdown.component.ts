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

  ngOnInit(): void {

    const nombre = localStorage.getItem('nombre')
    
    if (nombre != null){
      this.nombre = nombre
    }
  }

  logOut(){

    //TODO : BORRAR EL TOKEN DE LA BASE DE DATOS

    localStorage.removeItem("token");

    this.router.navigate(['/'])
  }

}
