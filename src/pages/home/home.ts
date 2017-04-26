import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SwipeTabs} from '../swipetabs/swipetabs';
import { LoginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginPage :any;
  constructor(public navCtrl: NavController) {
    this.loginPage = LoginPage;
  }

}
