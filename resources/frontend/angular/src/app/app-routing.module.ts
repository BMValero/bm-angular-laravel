import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './content/acceso/acceso.component';
import { LoginComponent } from './content/acceso/login/login.component';
import { RegistroComponent } from './content/acceso/registro/registro.component';
import { CamisetasComponent } from './content/catalogo/camisetas/camisetas.component';
import { CatalogoComponent } from './content/catalogo/catalogo.component';
import { GorrasComponent } from './content/catalogo/gorras/gorras.component';
import { SudaderasComponent } from './content/catalogo/sudaderas/sudaderas.component';
import { ContactoComponent } from './content/contacto/contacto.component';
import { CuentaComponent } from './content/cuenta/cuenta.component';
import { PerfilComponent } from './content/cuenta/perfil/perfil.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { LoginGuard } from './guards/login.guard';
import { PedidosComponent } from './content/cuenta/pedidos/pedidos.component';
import { CredencialesComponent } from './content/cuenta/perfil/credenciales/credenciales.component';
import { EnvioComponent } from './content/cuenta/perfil/envio/envio.component';
import { FactoryTarget } from '@angular/compiler';
import { FacturacionComponent } from './content/cuenta/perfil/facturacion/facturacion.component';

const routes: Routes = [

  {
    path : '',
    component : InicioComponent
  },
  {
    path : 'catalogo',
    component : CatalogoComponent,
    children : [
      {
        path : 'camisetas',
        component : CamisetasComponent
      },
      {
        path : 'sudaderas',
        component : SudaderasComponent
      },
      {
        path : 'gorras',
        component : GorrasComponent
      }
    ]
  },
  {
    path : 'contacto',
    component : ContactoComponent
  },
  {
    path : 'acceso',
    component : AccesoComponent,
    children : [
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'registro',
        component : RegistroComponent
      }
    ]
  },
  {
    path : 'cuenta',
    component : CuentaComponent,
    canActivate : [LoginGuard],
    children : [
      {
        path : 'perfil',
        component : PerfilComponent,
        children : [
          {
            path : 'credenciales',
            component : CredencialesComponent
          },
          {
            path : 'envio',
            component : EnvioComponent
          },
          {
            path : 'facturacion',
            component : FacturacionComponent
          }
        ]
      },
      {
        path : 'pedidos',
        component : PedidosComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }