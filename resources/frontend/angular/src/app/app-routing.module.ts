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
import { CredencialesComponent } from './content/cuenta/perfil/cliente/credenciales/credenciales.component';
import { EnvioComponent } from './content/cuenta/perfil//cliente/envio/envio.component';
import { FactoryTarget } from '@angular/compiler';
import { FacturacionComponent } from './content/cuenta/perfil/cliente/facturacion/facturacion.component';
import { GestionUsuariosComponent } from './content/cuenta/perfil/admin/gestion-usuarios/gestion-usuarios.component';
import { AdminGuard } from './guards/admin.guard';
import { GestionProductosComponent } from './content/cuenta/perfil/admin/gestion-productos/gestion-productos.component';
import { GestionPedidosComponent } from './content/cuenta/perfil/admin/gestion-pedidos/gestion-pedidos.component';
import { PedidosComponent } from './content/cuenta/perfil/cliente/pedidos/pedidos.component';
import { FichaPedidoComponent } from './content/cuenta/perfil/cliente/pedidos/ficha-pedido/ficha-pedido.component';
import { FichaProductoComponent } from './content/catalogo/ficha-producto/ficha-producto.component';
import { CestaComponent } from './content/cuenta/perfil/cliente/cesta/cesta.component';
import { CompraComponent } from './content/cuenta/perfil/cliente/compra/compra.component';

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
    path : 'catalogo/:nombre',
    component : FichaProductoComponent
  },
  {
    path : 'cesta',
    component : CestaComponent,
  },
  {
    path : 'compra',
    component : CompraComponent,
    canActivate : [LoginGuard]
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
          },
          {
            path : 'pedidos',
            component : PedidosComponent
          },
          {
            path : 'pedidos/:id',
            component : FichaPedidoComponent
          },
          {
            path : 'gestion-usuarios',
            component : GestionUsuariosComponent,
            canActivate : [AdminGuard]
          },
          {
            path : 'gestion-productos',
            component : GestionProductosComponent,
            canActivate : [AdminGuard]
          },
          {
            path : 'gestion-pedidos',
            component : GestionPedidosComponent,
            canActivate : [AdminGuard]
          }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }