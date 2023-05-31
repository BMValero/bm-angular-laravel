import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.scss']
})
export class CestaComponent implements OnInit{

  nombreYTallaProductosCesta : any;
  productosCestaCookies : any;
  productosCesta = [];
  productosCatalogo : any;
  productosCatalogoFiltrados = [];
  costeTotal = 0

  constructor(private apiService : ApiService , private router : Router){

    this.productosCestaCookies = localStorage.getItem("cesta")

    if ( this.productosCestaCookies &&  this.productosCestaCookies != ""){

      this.nombreYTallaProductosCesta = this.productosCestaCookies.split("///")

      this.apiService.obtenerProductos().subscribe((res)=>{

        this.productosCatalogo = res;

        this.productosCatalogo.forEach(productoLista => {
        
          let controlProductoExiste = true

          this.productosCatalogoFiltrados.forEach(productoCatalogo => {
            
            if(productoLista.nombre == productoCatalogo.nombre && productoLista.tipo == productoCatalogo.tipo && productoLista.talla == productoCatalogo.talla){
            
              controlProductoExiste = false

            }

          });

          if(controlProductoExiste == true){

            this.productosCatalogoFiltrados.push(productoLista)

          }

        });


        this.nombreYTallaProductosCesta.forEach((nombreYTallaProductoCesta : any) => {

          let arrayNombreYTallaProductoCesta = nombreYTallaProductoCesta.split(">")

          this.productosCatalogoFiltrados.forEach(productoCatalogoFiltrado => {
            
            if(arrayNombreYTallaProductoCesta[0] == productoCatalogoFiltrado.nombre && arrayNombreYTallaProductoCesta[1] == productoCatalogoFiltrado.talla){

              this.productosCesta.push(productoCatalogoFiltrado)

            }

          });
        });


        if(this.productosCesta){

          this.productosCesta.forEach(producto => {
    
            this.costeTotal += producto.precio
            
          });
    
        }
      })
    }
  }

  ngOnInit(): void {
    
  }

  eliminarProductoCesta(nombreProducto , talla){

    let stringProducto = `${nombreProducto}>${talla}`

    const productosCesta = localStorage.getItem("cesta")

    let arrayProductosCesta = productosCesta.split("///")

    for (let i = 0; i < arrayProductosCesta.length; i++) {
      const productoYTalla = arrayProductosCesta[i];

      if(productoYTalla == stringProducto){

        arrayProductosCesta = arrayProductosCesta.slice(0,i).concat(arrayProductosCesta.slice(i + 1))

        localStorage.setItem("cesta" , arrayProductosCesta.join("///"))

        break
      }
      
    }

    location.reload()

  }

  comprarCesta(){

    localStorage.setItem("costeTotal" , `${this.costeTotal}`)

    this.router.navigate(['/compra'])
  }
}