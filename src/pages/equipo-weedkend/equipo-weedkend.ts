import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EquipoWeedkendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipo-weedkend',
  templateUrl: 'equipo-weedkend.html',
})
export class EquipoWeedkendPage {

  data: any;
  headerImage: any = "";


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data =  
    { 
      headerTitle: "Datos Técnicos",
      headerImage: '../assets/imgs/background-small/detalles_tecnicos.jpg',
      title: "The Weedkend.",
      subtitle: "9 - 10 Junio. El Jardin - Gijón",
      items: [
          {
              id: 1,
              title: 'Datos de Interés',
              subtitle: 'Nombre : Weedkend'  +
                        'Fechas: 9 y 10 de junio' +
                        'Periodicidad: Anual' +
                        'Carácter: Informativo y lúdico' +
                        'Horario: Apertura a las 12 hasta cierre.' +
                        'Coste Entrada: 8 - 12 €' +
                        'Emplazamiento: El Jardin' +
                        'Ubicación: Dirección Camino Los Manzanos, 37. 33203. Gijón, Asturias' +
                        'Superficie: 3.000m2'
          },
          {
              id: 2,
              title: 'Perfil Expositores',
              subtitle: 'Las empresas y marcas que colaboran con nosotros en la organización de nuestros eventos, presentan características comunes; todos ellos están relacionadas con los usos del cáñamo, tanto lúdicos y medicinales, como otras aplicaciones no tan conocidas de esta planta.'
          },
          {
            id: 3,
            title: 'Perfil Visitante',
            subtitle: 'El aumento exponencial y progresivo del público asistente al evento nos muestra que quienes acuden a nuestro evento, repiten; esto también ha provocado una mayor heterogeneidad en el público asistente, el perfil de nuestro público sigue siendo por un lado, de hombres y mujeres menores de 40 años, con un nivel socio-cultural medio, interés en ampliar sus conocimientos respecto a los usos del cáñamo y abiertamente interesado en invertir en productos relativos al sector; así mismo el público joven continúa representando también un porcentaje elevado del número de asistentes al evento.'
          }
      ]
    };
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoWeedkendPage');
  }

}
