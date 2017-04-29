import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { LoginService } from '../../app/services/loginservice';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import {TranslateService} from '../../app/translate/translate.service';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { email: '', password: '' };
  constructor(private transService:TranslateService, private loginService: LoginService, private navCtrl: NavController, private params: NavParams, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

    transService.use('zh');
  }
  public createAccount() {
    this.navCtrl.push(RegisterPage);
  }

  public login() {
    let loader = this.loadingCtrl.create({
      content: 'loading...'
    });

    loader.present().then(() => {
      this.loginService.login(this.registerCredentials).subscribe(allowed => {

        if (allowed) {
          this.navCtrl.setRoot(TabsPage);
        } else {
          this.showError("Access Denied");
        }
        loader.dismiss();
      });
    });

  }
  showError(text) {

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
