import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.scss']
})
export class GestionProductosComponent implements OnInit{

  datosProductoForm !: FormGroup

  productos : any

  constructor(private apiService : ApiService, private fb : FormBuilder){

    this.datosProductoForm = this.fb.group({

      tipo : ['',Validators.required],
      edicion : ['' ,Validators.required],
      nombre : ['', Validators.required],
      descripcion : ['', Validators.required],
      talla : ['', Validators.required],
      precio : ['', Validators.required],
      cantidad : ['', Validators.required],
      rutaImagen : ['', Validators.required]
  
    });

    this.apiService.obtenerProductos().subscribe((res) => {
    
    this.productos = res
    
    })
  
  }

  ngOnInit(): void {
    
  }

  crearNuevoProducto(){

    if(this.datosProductoForm.valid){

      let objProducto = {
        "tipo" : `${this.datosProductoForm.controls['tipo'].value}`,
        "edicion" : `${this.datosProductoForm.controls['edicion'].value}`,
        "nombre" : `${this.datosProductoForm.controls['nombre'].value}`,
        "descripcion" : `${this.datosProductoForm.controls['descripcion'].value}`,
        "talla" : `${this.datosProductoForm.controls['talla'].value}`,
        "precio" : `${this.datosProductoForm.controls['precio'].value}`,
        "cantidad" : `${this.datosProductoForm.controls['cantidad'].value}`,
        "rutaImagen" : `${this.datosProductoForm.controls['rutaImagen'].value}`,
      }

      this.apiService.crearNuevoProducto(objProducto).subscribe(res => { 
        
        console.log(res)
      
        location.reload();
      
      });

      

    }

  }

  eliminarProducto(id : number){

    this.apiService.eliminarProducto(id).subscribe(res => {
      
      console.log(res)
    
      location.reload();

    });

  }

}
