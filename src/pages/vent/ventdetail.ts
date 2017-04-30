import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { TranslateService } from '../../app/translate/translate.service';


@Component({
    selector: 'page-ventdetail',
    templateUrl: 'ventdetail.html'
})
export class VentDetailPage {

     constructor(public navCtrl: NavController, public navParams: NavParams) { }
     
}