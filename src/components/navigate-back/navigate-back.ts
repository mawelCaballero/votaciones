import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { WelcomePage } from '../../pages/welcome/welcome';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Generated class for the NavigateBackComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navigate-back',
  templateUrl: 'navigate-back.html'
})
export class NavigateBackComponent {

  @ViewChild(Nav) nav: Nav;

  text: string;

  constructor(public navCtrl: NavController) {
    
  }

  goBack(){
    this.navCtrl.push(WelcomePage, {}, {animate: false});
  }

}
