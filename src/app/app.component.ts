import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { DatosTecnicoPage } from '../pages/datos-tecnico/datos-tecnico';
import { EquipoWeedkendPage } from '../pages/equipo-weedkend/equipo-weedkend';
import { AsturiasPage } from '../pages/asturias/asturias';
import { ObjetivosPage } from '../pages/objetivos/objetivos';
import { AutoCultivoPage } from '../pages/auto-cultivo/auto-cultivo';
import { MedicinalPage } from '../pages/medicinal/medicinal';
import { StandsPage } from '../pages/stands/stands';
import { ActividadesPage } from '../pages/actividades/actividades';

@Component({
  templateUrl: 'app.html'
})



export class MyApp {
  @ViewChild(Nav) nav: Nav;


  rootPage:any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Datos Técnicos', component: DatosTecnicoPage },
      { title: 'Equipo Weedkend', component: EquipoWeedkendPage },
      { title: 'Por que Asturias?', component: AsturiasPage },
      { title: 'Objetivos', component: ObjetivosPage },
      { title: 'Autocultivo', component: AutoCultivoPage },
      { title: 'Medicinal', component: MedicinalPage },
      { title: 'Stands Weedkend', component: StandsPage },
      { title: 'Actividades', component: ActividadesPage }

    ];
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
