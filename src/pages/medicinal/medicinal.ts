import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MedicinalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicinal',
  templateUrl: 'medicinal.html',
})
export class MedicinalPage {

  data: any;
  headerImage: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data =  
    { 
      headerTitle: "Medicinal",
      headerImage: '../assets/imgs/background-small/detalles_tecnicos.jpg',
      title: "Propiedades Medicinales",
      subtitle: "Beneficios para la salud",     
      items: [   
          {
              id: 1,
              title: '',
              paragraph1: 'WeedKend es un firme defensor por la legalización de los usos terapéuticos y medicinales del cannabis. Nuestro constante contacto con CSC, así como con personal del sector sanitario y unidades de cuidados paliativos, nos han hecho adoptar esta postura.',
              paragraph2: 'Esta creencia no es gratuita, son innumerables los estudios realizados por universidades y empresas de renombre por todo el planeta, así como organizaciones de carácter internacional que han comenzado a prestarle la debida atención al cannabis y sus usos, como es el caso de la Organización Mundial de la Salud (OMS) que, en 2017, decidió evaluar oficialmente el valor medicinal del cannabis.',
              paragraph3: 'Por todo ello, una de nuestras apuestas más fuertes es por quienes más lo necesitan; las recogidas de firmas son una medida de presión social siempre presente en nuestros eventos, así como charlas informativas impartidas por personal médico enfocadas hacia quienes necesitan del cannabis para alcanzar un estándar de vida mejor y, sobre todo, con menos dolor.'
           }
      ]
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicinalPage');
  }

}
