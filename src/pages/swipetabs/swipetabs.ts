import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';


@Component({
    selector: 'swipe-tabs',
    templateUrl: 'swipetabs.html'
})
export class SwipeTabs {
    @ViewChild('pageSlider') pageSlider: Slides;
    tabs: any = '0';

    constructor(public navCtrl: NavController, public navParams: NavParams) { }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SwipeTabsPage');
    }
    selectTab(index) {
        this.pageSlider.slideTo(index);
    }
    changeWillSlide($event) {
        this.tabs = $event._snapIndex.toString();
    }
}