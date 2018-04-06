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
              paragraph1: 'Gijón es una villa situada en la costa asturiana y considerada por antonomasia la capital de la famosa “Costa Verde”. Así mismo, la ciudad se ha convertido en un referente para los visitantes, no solo por su clima, su patrimonio histórico y cultural y sus paisajes, sino por ofrecer una amplia gama de propuestas lúdicas y culturales, entre los que destacan a nivel nacional eventos como FETEN (Feria Europea de Teatro para niños), el Festival Arco Atlántico, FIDMA (Feria Internacional de Muestras de Asturias), La Semana Negra o el aclamado Metrópoli (Festival Media de Cultura y Entretenimiento) que cuenta con su propia Comic-Con, pasando a convertirse en un festival bianual.',
              paragraph2: 'Como formación apolítica buscamos	 el apoyo de organizaciones que valoren las posibilidades del sector, y que, desde una perspectiva médica, ecológica, económica… promuevan el mejor conocimiento y respeto por un producto tremendamente criticado y estigmatizado por ciertos sectores de la sociedad a causa del profundo desconocimiento y desinformación que de forma histórica hemos padecido en nuestro país.',
              paragraph3: 'Para llegar a la mayor cantidad de público posible, otro de nuestros objetivos es lograr la implicación de los diferentes partidos políticos españoles, que, como representantes de todos y todas, deben mostrar sus posturas respecto a un producto cuya producción y crecimiento está aumentando de forma exponencial en todo el planeta, suponiendo el florecimiento económico y social de áreas anteriormente en declive.'
           },
          {
            id: 2,
            title: '¿Qué Queremos?',
            paragraph1: 'Además de buscar la mayor visibilidad del cáñamo y sus usos, otro de nuestros objetivos es aportar a nuestra ciudad mayor atractivo de cara a su principal fuente de ingresos, el turismo. No existen eventos similares en un radio geográfico amplio, y siendo una ciudad pionera en ofrecer eventos y ferias internacionales, la aportación innovadora de los usos del cáñamo servirá para que muchos inversores nacionales e internacionales fijen sus ojos en Asturias.',
            paragraph2: 'Así mismo, la existencia de todos los recursos necesarios para el cultivo supone un atractivo añadido para las empresas especializadas, que encuentran en Asturias el clima y los terrenos propicios en los que instalarse; pudiendo aprovechar además las ventajas de ser pioneros en un sector poco explotado en nuestro país.',
            paragraph3: 'La colaboración con partidos político, asociaciones y federaciones de usuarios, unidades de cuidados paliativos, plataformas de regulación y despachos de abogados, es otro de nuestros puntos fuertes, logrando dar visibilidad a una parte significativa de la sociedad, que durante décadas ha tenido que permanecer en silencio.'
          },
          {
            id: 3,
            title: '¿Qué NO Queremos?',
            paragraph1: 'El equipo de Weedkend, así como quienes colaboran y asisten a nuestro evento buscan evitar la confusión del cáñamo y el cánnabis únicamente con sus usos más negativos y despreciables, asociados a la explotación y abuso de miles de personas y del medio ambiente.',
            paragraph2: 'Así mismo, la existencia de todos los recursos necesarios para el cultivo supone un atractivo añadido para las empresas especializadas, que encuentran en Asturias el clima y los terrenos propicios en los que instalarse; pudiendo aprovechar además las ventajas de ser pioneros en un sector poco explotado en nuestro país.',
            paragraph3: ''
          },
          {
            id: 4,
            title: '¿Precedentes en Asturias?',
            paragraph1: 'Si bien el carácter del evento es totalmente innovador en la provincia, sí que en nuestra región existe una tradición respecto a los usos del cáñamo y el cannabis, como es el caso de AECA (Asociación de Estudios del Cáñamo de Asturias), que durante años ha participado con un stand en la conocidísima Semana Negra de Gijón.',
            paragraph2: 'Por otro lado, eventos de tirón nacional como La Cannabis Parade también han estado presentes en la comunidad, siendo el camping de Taurán (Luarca) el elegido en el año 2004 como la ubicación perfecta para la reunión anual de los socios de la AICC – Asociación de Internautas del Cannabis Café, cita a la que acudió “El Cantu”, fundador del foro que recibe el mismo nombre, desde su residencia habitual al otro lado del Atlántico.',
            paragraph3: ''
          }
      ]
    };  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObjetivosPage');
  }

}
