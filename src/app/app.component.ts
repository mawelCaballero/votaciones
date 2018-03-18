import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { MenuService } from '../services/menu.service';

@Component({
  templateUrl: 'app.html',
  providers: [MenuService]

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  rootPage:any = WelcomePage;
  pages: any;
  params: any;
  leftMenuTitle: string;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuService: MenuService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = this.menuService.getAllPages();
    this.leftMenuTitle = this.menuService.getTitle();
    this.params = this.menuService.getDataForTheme();
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
