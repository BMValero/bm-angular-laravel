import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { AlertasService } from './services/alertas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  showAlertCorrecta = false;
  showAlertIncorrecta = false;
  mensaje = ''

  constructor(private alertService :AlertasService){}

  ngOnInit(){
    this.alertService.alert$.subscribe((res : any) => {
      
      this.mensaje = res.mensaje

      if(res.correcta == true){
        this.showAlertCorrecta = true
        setTimeout(() => {

          this.showAlertCorrecta = false

        } , res.tiempo)
      } else {
        this.showAlertIncorrecta = true

        setTimeout(() => {

          this.showAlertIncorrecta = false

        } , res.tiempo)
      }

      
    })
  }
}
