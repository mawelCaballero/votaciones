import { IService } from './IService';
import { Injectable } from '@angular/core';
import { LoginPage } from '../pages/login/login';
import { DatosTecnicoPage } from '../pages/datos-tecnico/datos-tecnico';
import { EquipoWeedkendPage } from '../pages/equipo-weedkend/equipo-weedkend';
import { AsturiasPage } from '../pages/asturias/asturias';
import { ObjetivosPage } from '../pages/objetivos/objetivos';
import { AutoCultivoPage } from '../pages/auto-cultivo/auto-cultivo';
import { MedicinalPage } from '../pages/medicinal/medicinal';
import { StandsPage } from '../pages/stands/stands';
import { ActividadesPage } from '../pages/actividades/actividades';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';

@Injectable()
export class MenuService implements IService {

    constructor() {}

    getId = ():string => 'menu';

    getTitle = ():string => 'Weedkend Cup 2018';

    getAllPages = (isLogged:boolean): Array<any> => {
      return !isLogged ? [
        {"title" : "Login",             "icon" : "icon-lock-open-outline",  "component": LoginPage},
        {"title" : "Datos Técnicos" ,   "icon" : "icon-dots-horizontal",    "component": DatosTecnicoPage},
        {"title" : "Equipo Weedkend",   "icon" : "icon-dots-horizontal",    "component": EquipoWeedkendPage},
        {"title" : "Porqué Asturias",   "icon" : "icon-dots-horizontal",    "component": AsturiasPage},
        {"title" : "Objetivos",         "icon" : "icon-dots-horizontal",    "component": ObjetivosPage},
        {"title" : "Autocultivo",       "icon" : "icon-dots-horizontal",    "component": AutoCultivoPage},
        {"title" : "Medicinal",         "icon" : "icon-dots-horizontal",    "component": MedicinalPage},
        {"title" : "Stands Weedkend",   "icon" : "icon-dots-horizontal",    "component": StandsPage},
        {"title" : "Actividades",       "icon" : "icon-dots-horizontal",    "component": ActividadesPage},
      ] : 
      [
        {"title" : "Votaciones",        "icon" : "icon-lock-open-outline",  "component": HomePage},
        {"title" : "Datos Técnicos" ,   "icon" : "icon-dots-horizontal",    "component": DatosTecnicoPage},
        {"title" : "Equipo Weedkend",   "icon" : "icon-dots-horizontal",    "component": EquipoWeedkendPage},
        {"title" : "Porqué Asturias",   "icon" : "icon-dots-horizontal",    "component": AsturiasPage},
        {"title" : "Objetivos",         "icon" : "icon-dots-horizontal",    "component": ObjetivosPage},
        {"title" : "Autocultivo",       "icon" : "icon-dots-horizontal",    "component": AutoCultivoPage},
        {"title" : "Medicinal",         "icon" : "icon-dots-horizontal",    "component": MedicinalPage},
        {"title" : "Stands Weedkend",   "icon" : "icon-dots-horizontal",    "component": StandsPage},
        {"title" : "Actividades",       "icon" : "icon-dots-horizontal",    "component": ActividadesPage},
        {"title" : "Salir",             "icon" : "icon-dots-horizontal",    "component": WelcomePage},
      ];
    };

    getDataForTheme = () => {
      return {
        "background": "../assets/imgs/background/bg_menu2.jpg",
        "image": "../assets/imgs/logo/logo_menu.png",
        "class":"customMainPic",
        "title": "The# Weedkend",
        "description": "El evento canabico más grande de la zona norte de España"
      };
    };
}
