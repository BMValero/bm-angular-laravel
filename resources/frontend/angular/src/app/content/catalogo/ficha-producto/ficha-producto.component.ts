import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-ficha-producto',
  templateUrl: './ficha-producto.component.html',
  styleUrls: ['./ficha-producto.component.scss']
})
export class FichaProductoComponent {

  nombreProducto : any

  productos : any

  producto : any

  constructor(private route: ActivatedRoute, private location : Location , private apiService : ApiService , private alertService : AlertasService){

    const nombreProducto = this.route.snapshot.url[this.route.snapshot.url.length - 1].path;

    this.nombreProducto = nombreProducto.split("-").join(" ")

    this.apiService.obtenerProducto(this.nombreProducto).subscribe((res) => {
      
      this.productos = res

      let tallas = []

      this.productos.forEach(producto => {

        let controlTalla = true

        tallas.forEach(talla => {

          if(producto.talla == talla){

            controlTalla = false

          }
          
        });

        if(controlTalla == true){

          tallas.push(producto.talla.toUpperCase())

        }
        
      });

      let productoTemplate = {
        nombre : this.productos[0].nombre,
        descripcion : this.productos[0].descripcion,
        edicion : this.productos[0].edicion,
        tipo : this.productos[0].tipo,
        ruta_imagen : this.productos[0].ruta_imagen,
        precio : this.productos[0].precio,
        tallas : tallas
      }

      this.producto = productoTemplate

    })

  }

  volverAtras() : void  {
    this.location.back();
  }

  anadirProducto(producto : any,talla: string){

    let productosCesta = localStorage.getItem("cesta")

    if(productosCesta){

      const arrayProductosCesta = productosCesta.split("///")

      arrayProductosCesta.push(`${producto.nombre}>${talla}`)

      productosCesta = arrayProductosCesta.join("///")

      localStorage.setItem("cesta" , productosCesta)

    } else {

      localStorage.setItem("cesta" , `${producto.nombre}>${talla}`)

    }

    this.alertService.mostrarAlerta("Producto añadido." , 3000 , true);

    setTimeout(() => {
      location.reload()
    }, 1000)

  }

}

