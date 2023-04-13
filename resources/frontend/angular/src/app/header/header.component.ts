import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private router : Router){}

  controlLogin = false;
  nombre = "";

  ngOnInit(): void {

    const token = localStorage.getItem('token')

    if (token != null) {
      this.controlLogin = true
    }
  
  }

}
