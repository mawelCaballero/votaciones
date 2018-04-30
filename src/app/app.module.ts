import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { DatosTecnicoPage } from '../pages/datos-tecnico/datos-tecnico';
import { EquipoWeedkendPage } from '../pages/equipo-weedkend/equipo-weedkend';
import { AsturiasPage } from '../pages/asturias/asturias';
import { ObjetivosPage } from '../pages/objetivos/objetivos';
import { AutoCultivoPage } from '../pages/auto-cultivo/auto-cultivo';
import { MedicinalPage } from '../pages/medicinal/medicinal';
import { StandsPage } from '../pages/stands/stands';
import { ActividadesPage } from '../pages/actividades/actividades';
import { NavigateBackComponent } from '../components/navigate-back/navigate-back';
import { MuestraComponent } from '../components/muestra/muestra.component';
import { IndicadorComponent } from '../components/indicador/indicador.component';
import { VotoComponent } from '../components/voto/voto.component';

import { AuthService } from '../services/auth.service';
import { UsuarioService } from '../services/usuario.service';

import { MuestraService } from '../services/muestra.service';
import { IndicadorService } from '../services/indicador.service';
import { VotoService } from '../services/voto.service';

import { Indicador } from '../model/indicador';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage,
    DatosTecnicoPage,
    EquipoWeedkendPage,
    AsturiasPage,
    ObjetivosPage,
    AutoCultivoPage,
    MedicinalPage,
    StandsPage,
    ActividadesPage,
    NavigateBackComponent,
    MuestraComponent,
    IndicadorComponent,
    VotoComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgxErrorsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage,
    DatosTecnicoPage,
    EquipoWeedkendPage,
    AsturiasPage,
    ObjetivosPage,
    AutoCultivoPage,
    MedicinalPage,
    StandsPage,
    ActividadesPage,
    NavigateBackComponent, 
    MuestraComponent,
    IndicadorComponent,
    VotoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    UsuarioService,
    MuestraService,
    IndicadorService,
    VotoService
  ]
})
export class AppModule {}
