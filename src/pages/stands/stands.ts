import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stands',
  templateUrl: 'stands.html',
})
export class StandsPage {

  data: any;
  headerImage: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data =  
    { 
      headerTitle: "Stands Weedkend",
      headerImage: '../assets/imgs/background-small/detalles_tecnicos.jpg',
      title: "",
      subtitle: "",     
      items: [   
          {
              id: 1,
              title: 'Criterios generales de participación',
              paragraph1: 'WeedKend es un evento que promueve la información y la innovación en los usos del cáñamo, por ello el patrocinio y colaboración están abiertos a todas aquellas empresas, marcas, asociaciones u organizaciones relativas al sector; abarcando desde grow shops a restaurantes de comida temática, pasando por empresas del sector textil o de materiales de construcción.',
              paragraph2: 'El requisito principal es una relación justificable con la temática del evento, así como propuestas relacionadas con áreas de interés del público asistente. Dado el rango que supone esta premisa, las posibilidades de colaboración resultan prácticamente infinitas.',
              paragraph3: 'Por ello nuestro equipo siempre está dispuesto a recibir nuevas propuestas de participación, siendo escasos los casos en los que la colaboración resulta inviable.'
           },
          {
            id: 2,
            title: 'Servicios específicos para patrocinadores y colaboradores',
            paragraph1: 'Si bien el público es quien nos respalda, nuestros patrocinadores y colaboradores son quienes dan vida al evento, y por ello, la atención a los mismos es una prioridad para WeedKend.',
            paragraph2: 'La disponibilidad de tomas de corriente, agua y demás recursos básicos está garantizada, del mismo modo, disponemos de servicios de montaje y desmontaje para todos aquellos patrocinadores y colaboradores que deseen instalar jaimas (carpas) donde acomodarse y disponer sus productos y propuestas. Esta labor queda a cargo de Toldos Barry, empresa asturiana de reconocido prestigio, que durante años se ha hecho cargo de este servicio en nuestros eventos.',
            paragraph3: 'Del mismo modo, y por supuesto, de acuerdo con la legislación vigente, el recinto será vigilado y custodiado por personal profesional titulado, que será aportado por la empresa PROSETECNISA, colaboradora habitual de nuestra marca. Así la seguridad quedará garantizada, no sólo para el público asistente, sino también para los expositores y marcas, que podrán recurrir a nuestros vigilantes de seguridad ante cualquier incidencia.'
          }
      ]
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandsPage');
  }

}
