import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  subscription : Subscription
  controlAdmin = false;
  controlLogin = false;
  nombre = "";
  cantidadProductosCesta : any ;
  textoProducto : any;

  listaProductos : any;
  catalogoFiltrar = []
  catalogoMostrar = []

  productosMostrar = []



  constructor(private router : Router , private apiService : ApiService){

    this.apiService.obtenerProductos().subscribe((res)=>{

      this.listaProductos = res;

      this.listaProductos.forEach(productoLista => {
      
        let controlProductoMostrarExiste = true
        let controlProductoExiste = true

        this.catalogoMostrar.forEach(productoCatalogo => {
          
          if(productoLista.nombre == productoCatalogo.nombre && productoLista.tipo == productoCatalogo.tipo){
          
            controlProductoMostrarExiste = false

          }

        });

        this.catalogoFiltrar.forEach(productoCatalogo => {
          
          if(productoLista.nombre == productoCatalogo.nombre && productoLista.tipo == productoCatalogo.tipo && productoLista.talla == productoCatalogo.talla){
          
            controlProductoExiste = false

          }

        });

        if(controlProductoMostrarExiste == true){

          this.catalogoMostrar.push(productoLista)

        }

        if(controlProductoExiste == true){

          this.catalogoFiltrar.push(productoLista)

        }

      });
    })
  }

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


  buscarProducto(evento : any){

    this.productosMostrar = []
    
    this.catalogoMostrar.forEach(producto => {
      
      if(producto.nombre.toUpperCase().includes(evento.toUpperCase())){

        this.productosMostrar.push(producto)

      }

    });

    if(evento == ""){
      this.productosMostrar = []
    }

  }

}
