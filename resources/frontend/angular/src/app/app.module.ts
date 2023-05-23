import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { CatalogoComponent } from './content/catalogo/catalogo.component';
import { ContactoComponent } from './content/contacto/contacto.component';
import { CamisetasComponent } from './content/catalogo/camisetas/camisetas.component';
import { SudaderasComponent } from './content/catalogo/sudaderas/sudaderas.component';
import { GorrasComponent } from './content/catalogo/gorras/gorras.component';
import { LoginDropdownComponent } from './header/login-dropdown/login-dropdown.component';
import { AccesoComponent } from './content/acceso/acceso.component';
import { LoginComponent } from './content/acceso/login/login.component';
import { RegistroComponent } from './content/acceso/registro/registro.component';
import { PerfilComponent } from './content/cuenta/perfil/perfil.component';
import { CuentaComponent } from './content/cuenta/cuenta.component';
import { CuentaDropdownComponent } from './header/cuenta-dropdown/cuenta-dropdown.component';
import { CredencialesComponent } from './content/cuenta/perfil/cliente/credenciales/credenciales.component';
import { EnvioComponent } from './content/cuenta/perfil//cliente/envio/envio.component';
import { FacturacionComponent } from './content/cuenta/perfil/cliente/facturacion/facturacion.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { GestionUsuariosComponent } from './content/cuenta/perfil/admin/gestion-usuarios/gestion-usuarios.component';
import { GestionProductosComponent } from './content/cuenta/perfil/admin/gestion-productos/gestion-productos.component';
import { GestionPedidosComponent } from './content/cuenta/perfil/admin/gestion-pedidos/gestion-pedidos.component';
import { PedidosComponent } from './content/cuenta/perfil/cliente/pedidos/pedidos.component';
import { FichaPedidoComponent } from './content/cuenta/perfil/cliente/pedidos/ficha-pedido/ficha-pedido.component';
import { FichaProductoComponent } from './content/catalogo/ficha-producto/ficha-producto.component';
import { CestaComponent } from './content/cuenta/perfil/cliente/cesta/cesta.component';
import { CompraComponent } from './content/cuenta/perfil/cliente/compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    InicioComponent,
    CatalogoComponent,
    ContactoComponent,
    CamisetasComponent,
    SudaderasComponent,
    GorrasComponent,
    LoginDropdownComponent,
    AccesoComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    CuentaComponent,
    CuentaDropdownComponent,
    CredencialesComponent,
    EnvioComponent,
    FacturacionComponent,
    GestionUsuariosComponent,
    GestionProductosComponent,
    GestionPedidosComponent,
    FichaPedidoComponent,
    PedidosComponent,
    FichaProductoComponent,
    CestaComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
