import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit{

  filtrosForm : FormGroup;

  tallasSeleccionadas = [];

  controlCatalogo = false;

  catalogoMostrar = [];
  catalogoFiltrar = [];
  listaProductos : any;

  imagenDelante = 'delante.png';

  constructor(private router: Router, private apiService : ApiService, private fb : FormBuilder){

    let filtros = localStorage.getItem("filtros")

    if(!filtros){

      filtros = "nombre///asc///00.00///00.00///XS,S,M,L,XL,X"

      localStorage.setItem("filtros" , filtros)
    }

    let filtrosAplicados = localStorage.getItem("filtros").split("///")

    this.filtrosForm = this.fb.group({

      ordenarTipo : ['nombre'],
      ordenarDireccion : ['asc'],
      precioDesde : ['00.00'],
      precioHasta : ['00.00']

    });

    if(!filtrosAplicados){

      this.filtrosForm.addControl("filtrarTallaXS",this.fb.control(true))
      this.filtrosForm.addControl("filtrarTallaS",this.fb.control(true))
      this.filtrosForm.addControl("filtrarTallaM",this.fb.control(true))
      this.filtrosForm.addControl("filtrarTallaL",this.fb.control(true))
      this.filtrosForm.addControl("filtrarTallaXL",this.fb.control(true))

    } else {

      this.filtrosForm.addControl("filtrarTallaXS",this.fb.control(false))
      this.filtrosForm.addControl("filtrarTallaS",this.fb.control(false))
      this.filtrosForm.addControl("filtrarTallaM",this.fb.control(false))
      this.filtrosForm.addControl("filtrarTallaL",this.fb.control(false))
      this.filtrosForm.addControl("filtrarTallaXL",this.fb.control(false))

    }

    if(this.router.url == "/catalogo"){
      this.controlCatalogo = true
    }

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

      if(filtrosAplicados){

        this.filtrosForm.controls['ordenarTipo'].setValue(filtrosAplicados[0])
        this.filtrosForm.controls['ordenarDireccion'].setValue(filtrosAplicados[1])
        this.filtrosForm.controls['precioDesde'].setValue(filtrosAplicados[2])
        this.filtrosForm.controls['precioHasta'].setValue(filtrosAplicados[3])

        let tallasFiltradas = filtrosAplicados[4].split(",")

        tallasFiltradas.forEach(talla => {

          switch(talla){
            case "XS" : 
              this.filtrosForm.controls['filtrarTallaXS'].setValue(true)
              break;
            case "S" : 
              this.filtrosForm.controls['filtrarTallaS'].setValue(true)
              break;
            case "M" : 
              this.filtrosForm.controls['filtrarTallaM'].setValue(true)
              break;
            case "L" : 
              this.filtrosForm.controls['filtrarTallaL'].setValue(true)
              break;
            case "XL" : 
              this.filtrosForm.controls['filtrarTallaXL'].setValue(true)
              break;
          }
          
        });

        this.catalogoMostrar = []

        this.catalogoFiltrar.forEach(productoLista => {

          let controlTalla = false
          let controlProductoMostrarExiste = true

          tallasFiltradas.forEach(talla => {

            if(productoLista.talla == talla){

              controlTalla = true

            }
            
          });

          if(controlTalla != false){

            this.catalogoMostrar.forEach(productoCatalogo => {
            
              if(productoLista.nombre == productoCatalogo.nombre && productoLista.tipo == productoCatalogo.tipo){
              
                controlProductoMostrarExiste = false
  
              }
  
            });
  
            if(controlProductoMostrarExiste == true){

              if(productoLista.precio >= filtrosAplicados[2]){

                if(filtrosAplicados[3] != "00.00"){

                  if(productoLista.precio <= filtrosAplicados[3]){

                    this.catalogoMostrar.push(productoLista)

                  }
                } else {

                  this.catalogoMostrar.push(productoLista)

                }
              }

            }

          }
          
        });

        if(filtrosAplicados[0] == "nombre"){

          if(filtrosAplicados[1] == "asc"){

            this.catalogoMostrar.sort((objeto1 : any, objeto2 : any) => objeto1.nombre.localeCompare(objeto2.nombre))

          }else if (filtrosAplicados[1] == "desc"){

            this.catalogoMostrar.sort((objeto1 : any, objeto2 : any) => objeto2.nombre.localeCompare(objeto1.nombre))
  
          }

        } else if (filtrosAplicados[0] == "precio"){

          if(filtrosAplicados[1] == "asc"){

            this.catalogoMostrar.sort((objeto1, objeto2) => {
              if (objeto1.precio < objeto2.precio) {
                return -1;
              }
              if (objeto1.precio > objeto2.precio) {
                return 1;
              }
              return 0;
            });

          }else if (filtrosAplicados[1] == "desc"){

            this.catalogoMostrar.sort((objeto1, objeto2) => {
              if (objeto1.precio > objeto2.precio) {
                return -1;
              }
              if (objeto1.precio < objeto2.precio) {
                return 1;
              }
              return 0;
            });
  
          }
        }

      }

    })

  }

  ngOnInit(): void {
    
  }

  obtenerRutaImagen(ruta : string){

    return '/assets/BW/camisetas/Original-Black/delante.png'
  }

  formatearNombreProducto(nombreProducto){
    
    const nombre = nombreProducto.split(" ").join("-")

    return nombre;

  }

  filtrar(){

    let filtroControlesTallas = [

      this.filtrosForm.controls['filtrarTallaXS'].value,
      this.filtrosForm.controls['filtrarTallaS'].value,
      this.filtrosForm.controls['filtrarTallaM'].value,
      this.filtrosForm.controls['filtrarTallaL'].value,
      this.filtrosForm.controls['filtrarTallaXL'].value

    ]

    let filtroTallas = []

    for (let i = 0; i < filtroControlesTallas.length; i++) {
      const talla = filtroControlesTallas[i];

      if(talla == true){

        switch(i){
          case 0 : 
            filtroTallas.push("XS")
            break;
          case 1 :
            filtroTallas.push("S") 
            break;
          case 2 :  
            filtroTallas.push("M")
            break;
          case 3 :  
            filtroTallas.push("L")
            break;
          case 4 :  
            filtroTallas.push("XL")
            break;
        }
      }
    }


    if(this.filtrosForm.controls['precioDesde'].value == ""){
      this.filtrosForm.controls['precioDesde'].setValue('00.00')
    }

    if(this.filtrosForm.controls['precioHasta'].value == ""){
      this.filtrosForm.controls['precioHasta'].setValue('00.00')
    }

    if(filtroTallas.length == 0){
      filtroTallas = ['XS','S','M','L','XL','X']
    }

    if(filtroTallas.length == 5){
      filtroTallas.push("X")
    }

    let stringFiltros = `${this.filtrosForm.controls['ordenarTipo'].value}///${this.filtrosForm.controls['ordenarDireccion'].value}///${this.filtrosForm.controls['precioDesde'].value}///${this.filtrosForm.controls['precioHasta'].value}///${filtroTallas.join(",")}`

    localStorage.setItem("filtros" , stringFiltros)

    location.reload()

  }
}
