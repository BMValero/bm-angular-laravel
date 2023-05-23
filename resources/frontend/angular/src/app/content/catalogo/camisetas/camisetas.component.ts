import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.scss']
})
export class CamisetasComponent {

  catalogoMostrar = []
  catalogoFiltrar = [];
  listaProductos : any

  constructor(private apiService : ApiService){

    let filtrosAplicados = localStorage.getItem("filtros").split("///")

    this.apiService.obtenerProductos().subscribe((res)=>{

      this.listaProductos = res;

        this.listaProductos.forEach(productoLista => {
        
          let controlProductoMostrarExiste = true
          let controlProductoExiste = true

          if(productoLista.tipo == "camisetas"){

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

          }

        });

      if(filtrosAplicados){

        let tallasFiltradas = filtrosAplicados[4].split(",")

        this.catalogoMostrar = []

        this.catalogoFiltrar.forEach(productoLista => {

          let controlTalla = false
          let controlProductoMostrarExiste = true

          if(productoLista.tipo == "camisetas"){

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

  formatearNombreProducto(nombreProducto){
    
    const nombre = nombreProducto.split(" ").join("-")

    return nombre;

  }

}
