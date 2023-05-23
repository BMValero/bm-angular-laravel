import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss']
})
export class GestionUsuariosComponent {

  usuarios : any 

  constructor(private apiService : ApiService){

    this.apiService.obtenerDatosClientes().subscribe((res) => {
    
    this.usuarios = res
    
  })

  }

  modificarRolUsuario(usuario_id : number , rol_antiguo_id : number, rol_nuevo_id : number){

    const objDatosUsuario = {

      "usuario_id" : `${usuario_id}`,
      "rol_antiguo_id" : `${rol_antiguo_id}`,
      "rol_nuevo_id" : `${rol_nuevo_id}`

    }

    this.apiService.modificarDatosClientes(objDatosUsuario).subscribe((res) => {
    
    console.log(res)
    
    location.reload();

    })

  }

  eliminarUsuario(usuario_id : number){

  }

}
