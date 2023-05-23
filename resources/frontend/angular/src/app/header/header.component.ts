import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private router : Router){}

  controlAdmin = false;
  controlLogin = false;
  nombre = "";
  cantidadProductosCesta : any ;

  ngOnInit(): void {

    const token = localStorage.getItem('token')
    const admin = localStorage.getItem('admin')

    if (token != null) {
      this.controlLogin = true
    }

    if(admin != null){
      this.controlAdmin = true
    }

    let productosCesta = localStorage.getItem("cesta")

    if(productosCesta){

      this.cantidadProductosCesta = productosCesta.split("///")

      this.cantidadProductosCesta = this.cantidadProductosCesta.length

    } else {

      this.cantidadProductosCesta = 0

    }

    
  
  }

}
