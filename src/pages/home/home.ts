import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  userId: string;

  constructor(public navCtrl: NavController, public app: App, 
    private storage: Storage) {
      this.storage.get('userId').then(
        (val) => {
          this.userId = val;    
        }
      );

  }

  logout(){
    // Remove API token 
    const root = this.app.getRootNav();
    root.popToRoot();
}

}
