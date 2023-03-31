import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
