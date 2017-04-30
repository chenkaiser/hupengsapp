import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {VentPage} from '../vent/vent';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = VentPage;
  tab3Root = ContactPage;
  tab4Root = AboutPage;

  constructor(public navCtrl: NavController ) {

  }

  checkAuth():void{
    this.navCtrl.push(LoginPage,{allowBack:true});
  }
}
