import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  obtenerTokenLogin(credenciales : object){
    let url : string = "http://127.0.0.1:8000/api/login";

    return this.http.post(url,credenciales);
  }

  registrarUsuario(datosUsuario : object){
    let url : string = "http://127.0.0.1:8000/api/registro";

    return this.http.post(url,datosUsuario)
  }

  //TODO : AÑADIR INTERCEPTOR PARA ENVIAR AUTORIZACIÓN EN PETICIONES

  obtenerDatosCliente(token : string){
    let url : string = `http://127.0.0.1:8000/api/datos/usuarios/${token}`;

    return this.http.get(url)
  }
}
