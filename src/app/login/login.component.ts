import { Component, OnInit } from '@angular/core';
import {LoginService } from '../services/loginservice';

@Component({
  templateUrl: 'login.html',
  selector :'comp-login'
})
export class LoginComponent implements OnInit {
    
    ngOnInit():void{

    }
  constructor(private loginService:LoginService) {
  }
}
