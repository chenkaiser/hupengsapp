import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { SwipeTabs} from '../swipetabs/swipetabs';
import { LoginPage} from '../login/login';
import {SettingsPage} from '../settings/settings';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginPage :any;
  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {
    this.loginPage = LoginPage;
  }

  public openConfig():void{
    console.log('dd');
    let modal = this.modalCtrl.create(SettingsPage);
    modal.present();
  
  }
}
