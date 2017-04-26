import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import {LoginService } from '../../app/services/loginservice';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  hasBackButton:boolean 
  constructor(private loginService: LoginService, public navCtrl: NavController, public params: NavParams) {

    this.hasBackButton = this.params.get('allowBack');
  }
  backHome():void{

      this.navCtrl.pop();
  }
}
