import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ObjetivosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-objetivos',
  templateUrl: 'objetivos.html',
})
export class ObjetivosPage {

  data: any;
  headerImage: any = "";


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data =  
    { 
      headerTitle: "Objetivos",
      headerImage: '../assets/imgs/background-small/detalles_tecnicos.jpg',
      title: "Visión",
      subtitle: "Principales Objetivos y Pretensiones",     
      items: [   
          {
              id: 1,
              title: 'Objetivos Generales',
              paragraph1: 'El evento Weedkend, tiene como objetivo principal dar visibilidad a un mercado que ofrece una inmensa variedad de propuestas además de ser un sector en el que la inversión de capital resulta muy interesante. Buscamos trasmitir al público general las posibilidades que ofrecen el cáñamo y el cannabis, ya no sólo de cara a sus más conocidos usos, como puede ser mitigar el dolor de personas enfermas, sino cómo la planta ofrece numerosos usos y una resistencia apabullante, pudiendo construirse con sus fibras, prácticamente cualquier objeto.',
              paragraph2: 'Como formación apolítica buscamos	 el apoyo de organizaciones que valoren las posibilidades del sector, y que, desde una perspectiva médica, ecológica, económica… promuevan el mejor conocimiento y respeto por un producto tremendamente criticado y estigmatizado por ciertos sectores de la sociedad a causa del profundo desconocimiento y desinformación que de forma histórica hemos padecido en nuestro país.',
              paragraph3: 'Para llegar a la mayor cantidad de público posible, otro de nuestros objetivos es lograr la implicación de los diferentes partidos políticos españoles, que, como representantes de todos y todas, deben mostrar sus posturas respecto a un producto cuya producción y crecimiento está aumentando de forma exponencial en todo el planeta, suponiendo el florecimiento económico y social de áreas anteriormente en declive.'
           }
          
      ]
    };  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObjetivosPage');
  }

}
