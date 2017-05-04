import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,IonicPageModule} from 'ionic-angular';
import { HuPengsApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SwipeTabs} from '../pages/swipetabs/swipetabs';
import {VentPage} from '../pages/vent/vent';
import {VentDetailPage } from '../pages/vent/ventdetail';
import {Events} from '../pages/events/events';
import {LoginService} from './services/loginservice';
import { TRANSLATION_PROVIDERS}   from './translate/translation';
import { TranslatePipe }   from './translate/translate.pipe';
import { TranslateService }   from './translate/translate.service';
import {SettingsPage} from'../pages/settings/settings';
@NgModule({
  declarations: [
    HuPengsApp,
    AboutPage,
    ContactPage,
    HomePage,
    SettingsPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SwipeTabs,
    Events,
    VentPage,
    VentDetailPage,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(HuPengsApp)
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HuPengsApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SettingsPage,
    SwipeTabs,
    Events,
    VentPage,
    VentDetailPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TRANSLATION_PROVIDERS,
    TranslateService
  ]
})
export class AppModule {}
