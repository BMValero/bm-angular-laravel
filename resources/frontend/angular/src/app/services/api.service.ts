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

  obtenerDatosClientes(){
    let url : string = `http://127.0.0.1:8000/api/datos/usuarios`;

    return this.http.get(url)
  }

  obtenerDatosCliente(token : string|null){
    let url : string = `http://127.0.0.1:8000/api/datos/usuarios/${token}`;

    return this.http.get(url)
  }

  modificarDatosClientes(datosCliente : object){
    let url : string = `http://127.0.0.1:8000/api/datos/usuarios/modificar/`;

    return this.http.put(url,datosCliente)
  }

  modificarDatosCliente(datosCliente : object , token : string|null){
    let url : string = `http://127.0.0.1:8000/api/datos/usuarios/modificar/${token}`;

    return this.http.put(url,datosCliente)
  }


}
