import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the DatosTecnicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos-tecnico',
  templateUrl: 'datos-tecnico.html',
})
export class DatosTecnicoPage {
  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosTecnicoPage');
  }

goBack(){
  this.navCtrl.push(WelcomePage, {}, {animate: false});

}
}
