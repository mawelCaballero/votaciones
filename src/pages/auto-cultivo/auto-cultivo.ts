import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AutoCultivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auto-cultivo',
  templateUrl: 'auto-cultivo.html',
})
export class AutoCultivoPage {

  data: any;
  headerImage: any = "";


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data =  
    { 
      headerTitle: "Auto-Cultivo",
      headerImage: '../assets/imgs/background-small/detalles_tecnicos.jpg',
      title: "Técnicas de Plantación",
      subtitle: "",     
      items: [   
          {
              id: 1,
              title: '',
              paragraph1: 'El auto-cultivo es un punto con creciente relevancia en el evento, WeedKend apoya a AsturFAC con sus actividades, que ya en el pasado año 2017 supusieron la creación y presentación de la propuesta no de ley (PNL) en el Parlamento Asturiano, siendo uno de sus puntos principales relativo al auto-cultivo. AsturFAC y sus partidarios han sabido percibir las ventajas y beneficios que ofrece esta modalidad de cultivo, y son nuestros patrocinadores y colaboradores quienes aportan las mayores y mejores innovaciones año a año desde sus stands en WeedKend.',
              paragraph2: 'Además de las charlas relativas al auto-cultivo que imparten profesionales colaboradores con Weedkend, se realizan muestras de los productos más novedosos del mercado, como en el área de iluminaria, donde empresas líderes en el sector han logrado mejorar los espectros de luz e incluso logrado reducir el consumo energético que supone; en el área relativa a la conservación y distribución de productos, los envases creados a partir de polímeros de alta tecnología y los envases de plástico estéril para la conservación de la sustancia en cualquieras de sus formas, son aportaciones pioneras ya vistas en anteriores ediciones.',
              paragraph3: 'También el cultivo ecológico y sostenible es una apuesta clara por parte del equipo, conociendo los actuales problemas causados por la sobreexplotación y destrucción de nuestro medio, se hace obligado buscar métodos más eficientes y menos contaminantes para el cultivo. Las charlas relativas a este tema son una constante en nuestros eventos, así como el asesoramiento y las propuestas más innovadoras para poder lograrlo.',
              paragraph4: 'Toda la información que aportamos a los visitantes, incluso a los que no conocen los infinitos usos del cáñamo y del cannabis, supone una inmersión en conocimientos que no están al alcance de la mayoría de ciudadanos.'
           }
      ]
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutoCultivoPage');
  }

}
