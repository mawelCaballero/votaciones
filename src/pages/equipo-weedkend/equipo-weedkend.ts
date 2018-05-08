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
      headerTitle: "Equipo Weedkend",
      headerImage: '../assets/imgs/background-small/detalles_tecnicos.jpg',
      title: "¿Quienes Somos?",
      subtitle: "",
      items: [
          {
              id: 1,
              title: '',
              subtitle: 'Somos un equipo formado por jóvenes proactivos, que, desde sus distintos enfoques profesionales, han visto en el cáñamo un sector en claro auge y con grandes posibilidades de explotación.'
          },
          {
            id: 2,
            title: '',
            subtitle: 'A consecuencia del crecimiento del sector, el evento ha ampliado su oferta dando lugar a propuestas alternativas, ecológicas y respetuosas con el medio ambiente, que siendo un punto de interés en la ideología de nuestro equipo cuentan a día de hoy con cada vez más seguidores.'
          },
          {
            id: 3,
            title: '',
            subtitle: 'La marca y quienes la forman buscan promover la información y la formación sobre los usos del cáñamo y del cannabis medicinal; siendo respaldados por especialistas médicos y representantes de múltiples partidos políticos.'
          },
          {
            id: 4,
            title: '',
            subtitle: 'Así mismo, nuestros valores empresariales son un claro reflejo del compromiso profesional que mantenemos con todos los colaboradores y asistentes, éstos son:' +
            'Compromiso: con la calidad del servicio y los valores y objetivos de la empresa.' +
            'Originalidad y Proactividad: nos caracterizamos por la búsqueda de la innovación y la ampliación de posibilidades de negocio en un sector en claro apogeo.' +
            'Perseverancia: mantener nuestros objetivos y trabajar en pos de la mejora, son una constante en nuestra forma de trabajar.'+
            'Integridad y Transparencia: desarrollamos nuestra labor dentro del marco de la ética, la honestidad, la confianza y la transparencia.'+
            'Trabajo en equipo: alcanzamos nuestras metas trabajando de manera colaborativa, logrando mejores resultados gracias a un ambiente positivo.' +
            'Comunicación: vías de comunicación abiertas y efectivas nos permiten gestionar de manera eficiente la marca y sus servicios..' + 
            'Aprendizaje: en un sector en constante cambio y aún en desarrollo, aprender de las experiencias y mejorar el servicio supone nuestra diferenciación respecto al resto.'

          },
          {
            id: 5,
            title: '',
            subtitle: 'Nuestros valores influyen constantemente en nuestra forma de actuar y en la propia organización de la empresa. La creación de responsables y coordinadores de equipo se han hecho necesarias tras el evento realizado en 2015, para garantizar nuestro compromiso con la calidad; así disponemos a día de hoy con una estructuración total en la organización del trabajo. Habiéndose creado departamentos y equipos de trabajo con tares exclusivas.'
          },
          {
            id: 6,
            title: '',
            subtitle: 'Equipo directivo: Germán González' + 
            'Departamento de comunicación y marketing: Jose Marqués ' + 
            'Departamento administrativo: Víctor Roche ' +
            'Departamento comercial: Jose Ignacio Méndez Trejo' +
            'Equipo de diseño e ilustración: Silvia Villalta ' +
            'Director de producción musical: Raúl Sánchez ' +
            'Regidor de escenario: Técnico de sonio e iluminación Jorge Sánchez.'
          }

      ]
    };
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoWeedkendPage');
  }

}
