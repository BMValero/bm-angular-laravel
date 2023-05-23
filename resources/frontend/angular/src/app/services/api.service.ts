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
    let url : string = `http://127.0.0.1:8000/api/datos/usuarios/modificar`;

    return this.http.put(url,datosCliente)
  }

  modificarDatosCliente(datosCliente : object , token : string|null){
    let url : string = `http://127.0.0.1:8000/api/datos/usuarios/modificar/${token}`;

    return this.http.put(url,datosCliente)
  }

  obtenerProductos(){
    let url : string = `http://127.0.0.1:8000/api/productos`;

    return this.http.get(url)
  }

  obtenerProducto(nombreProducto : string){
    let url : string = `http://127.0.0.1:8000/api/productos/${nombreProducto}`;

    return this.http.get(url)
  }

  crearNuevoProducto(objProducto : object){
    let url : string = `http://127.0.0.1:8000/api/productos`;

    return this.http.post(url,objProducto)
  }

  eliminarProducto(idProducto : number){
    let url : string = `http://127.0.0.1:8000/api/productos/${idProducto}`;

    return this.http.delete(url)
  }

  obtenerPedidos(){
    let url : string = `http://127.0.0.1:8000/api/pedidos`;

    return this.http.get(url)
  }

  obtenerPedidosCliente(token : string|null){
    let url : string = `http://127.0.0.1:8000/api/pedidos/${token}`;

    return this.http.get(url)
  }

  obtenerFichaPedido(idPedido : string){
    let url : string = `http://127.0.0.1:8000/api/pedidos/pedido/${idPedido}`;

    return this.http.get(url)
  }

  realizarPedido(objPedido : object){
    let url : string = `http://127.0.0.1:8000/api/pedidos/realizar`;

    return this.http.post(url,objPedido)
  }

  enviarMensajeContacto(objContacto : object){
    let url : string = `http://127.0.0.1:8000/api/contacto`;

    return this.http.post(url,objContacto)
  }

}
