import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
@Component({
    templateUrl: 'settings.html',
    selector: 'page-settings'
})
export class SettingsPage {

    constructor(public viewCtrl: ViewController) { }
    
    public dismiss(): void {
        this.viewCtrl.dismiss();
    }
}