import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import {POSTS} from '../../app/models/mock-post';
import {Post} from '../../app/models/post';


@Component({
    selector: 'swipe-tabs',
    templateUrl: 'swipetabs.html'
})
export class SwipeTabs {
    @ViewChild('pageSlider') pageSlider: Slides;

    list2:Post[] = [{Id:11,Title:"test post11", SubTitle:"subtitle is a subtitle", Text:"adsf ewl; ;lkdasf we;lka sdf;lkewqjr ads;lfk ew r;lkjadsf ew;lkrj weq;lkr jads;lfk jeqw;lrk ja f",User:"admin",UserId:1,Address:[],ImageUrls:[{Id:1,url:"https://cmgajcartsculture.files.wordpress.com/2015/04/chinese-dance.jpg?w=912",caption:"",link:""}]},
  {Id:12,Title:"test post12", SubTitle:"subtitle is a subtitle", Text:"adsf ewl; ;lkdasf we;lka sdf;lkewqjr ads;lfk ew r;lkjadsf ew;lkrj weq;lkr jads;lfk jeqw;lrk ja f",User:"admin",UserId:1,Address:[],ImageUrls:[{Id:1,url:"https://cmgajcartsculture.files.wordpress.com/2015/04/chinese-dance.jpg?w=912",caption:"",link:""}]},
  {Id:13,Title:"test post13", SubTitle:"subtitle is a subtitle", Text:"adsf ewl; ;lkdasf we;lka sdf;lkewqjr ads;lfk ew r;lkjadsf ew;lkrj weq;lkr jads;lfk jeqw;lrk ja f",User:"admin",UserId:1,Address:[],ImageUrls:[{Id:1,url:"https://cmgajcartsculture.files.wordpress.com/2015/04/chinese-dance.jpg?w=912",caption:"",link:""}]},
  {Id:14,Title:"test post14", SubTitle:"subtitle is a subtitle", Text:"adsf ewl; ;lkdasf we;lka sdf;lkewqjr ads;lfk ew r;lkjadsf ew;lkrj weq;lkr jads;lfk jeqw;lrk ja f",User:"admin",UserId:1,Address:[],ImageUrls:[{Id:1,url:"https://cmgajcartsculture.files.wordpress.com/2015/04/chinese-dance.jpg?w=912",caption:"",link:""}]},
  {Id:15,Title:"test post15", SubTitle:"subtitle is a subtitle", Text:"adsf ewl; ;lkdasf we;lka sdf;lkewqjr ads;lfk ew r;lkjadsf ew;lkrj weq;lkr jads;lfk jeqw;lrk ja f",User:"admin",UserId:1,Address:[],ImageUrls:[{Id:1,url:"https://cmgajcartsculture.files.wordpress.com/2015/04/chinese-dance.jpg?w=912",caption:"",link:""}]},
  {Id:16,Title:"test post16", SubTitle:"subtitle is a subtitle", Text:"adsf ewl; ;lkdasf we;lka sdf;lkewqjr ads;lfk ew r;lkjadsf ew;lkrj weq;lkr jads;lfk jeqw;lrk ja f",User:"admin",UserId:1,Address:[],ImageUrls:[{Id:1,url:"https://cmgajcartsculture.files.wordpress.com/2015/04/chinese-dance.jpg?w=912",caption:"",link:""}]},
  {Id:17,Title:"test post17", SubTitle:"subtitle is a subtitle", Text:"adsf ewl; ;lkdasf we;lka sdf;lkewqjr ads;lfk ew r;lkjadsf ew;lkrj weq;lkr jads;lfk jeqw;lrk ja f",User:"admin",UserId:1,Address:[],ImageUrls:[{Id:1,url:"https://cmgajcartsculture.files.wordpress.com/2015/04/chinese-dance.jpg?w=912",caption:"",link:""}]},
  {Id:18,Title:"test post18", SubTitle:"subtitle is a subtitle", Text:"adsf ewl; ;lkdasf we;lka sdf;lkewqjr ads;lfk ew r;lkjadsf ew;lkrj weq;lkr jads;lfk jeqw;lrk ja f",User:"admin",UserId:1,Address:[],ImageUrls:[{Id:1,url:"https://cmgajcartsculture.files.wordpress.com/2015/04/chinese-dance.jpg?w=912",caption:"",link:""}]},
  {Id:19,Title:"test post19", SubTitle:"subtitle is a subtitle", Text:"adsf ewl; ;lkdasf we;lka sdf;lkewqjr ads;lfk ew r;lkjadsf ew;lkrj weq;lkr jads;lfk jeqw;lrk ja f",User:"admin",UserId:1,Address:[],ImageUrls:[{Id:1,url:"https://cmgajcartsculture.files.wordpress.com/2015/04/chinese-dance.jpg?w=912",caption:"",link:""}]},
  {Id:20,Title:"test post20", SubTitle:"subtitle is a subtitle", Text:"adsf ewl; ;lkdasf we;lka sdf;lkewqjr ads;lfk ew r;lkjadsf ew;lkrj weq;lkr jads;lfk jeqw;lrk ja f",User:"admin",UserId:1,Address:[],ImageUrls:[{Id:1,url:"https://cmgajcartsculture.files.wordpress.com/2015/04/chinese-dance.jpg?w=912",caption:"",link:""}]},
];
    tabs: any = '0';
    list:Post[] =POSTS;
    constructor(public navCtrl: NavController, public navParams: NavParams) { }
   
    selectTab(index) {
        this.pageSlider.slideTo(index);
    }
    changeWillSlide($event) {
        this.tabs = $event._snapIndex.toString();
    }
    doInfinite($event)
    {
         return new Promise((resolve) => {
        setTimeout(() => {
          this.list=this.list.concat(this.list2);

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
    }
    trackByFn(){

    }
}