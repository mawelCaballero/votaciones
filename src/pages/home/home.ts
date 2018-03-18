import { Component, ViewChild } from '@angular/core';
import { NavController, App, Nav } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../services/auth.service';
import { WelcomePage } from '../welcome/welcome';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Tab 1', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
    { title: 'Tab 2', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contacts' },
    { title: 'Tab 3', pageName: 'SpecialPage', icon: 'shuffle' },
  ];

  user: string;

  constructor(public navCtrl: NavController, public app: App, 
    private storage: Storage, private auth: AuthService) {
      this.storage.get('userId').then(
        (val) => {
          this.user = val;    
        }
      );

  }

  logout(){
    // Remove API token 
    this.auth.signOut();
	  this.navCtrl.setRoot(WelcomePage);

}

}
