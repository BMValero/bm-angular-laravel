import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    if(this.router.url == "/cuenta"){
      this.router.navigate(['/cuenta/perfil'])
    }
  }

}
