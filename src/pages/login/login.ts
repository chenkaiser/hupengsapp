import { Component } from '@angular/core';
import { NavController,NavParams, AlertController, LoadingController, Loading, IonicPage} from 'ionic-angular';
import {LoginService } from '../../app/services/loginservice';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

loading: Loading;
  registerCredentials = { email: '', password: '' };
  constructor(private loginService: LoginService, private navCtrl: NavController, private params: NavParams,private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

   
  }
 public createAccount() {
    this.navCtrl.push('RegisterPage');
  }
 
  public login() {
    this.showLoading()
    this.loginService.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.navCtrl.setRoot(TabsPage);
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
