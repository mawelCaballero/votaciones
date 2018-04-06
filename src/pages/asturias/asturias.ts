import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AsturiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asturias',
  templateUrl: 'asturias.html',
})
export class AsturiasPage {

  data: any;
  headerImage: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data =  
    { 
      headerTitle: "Asturias",
      headerImage: '../assets/imgs/background-small/detalles_tecnicos.jpg',
      title: "Costa Verde",
      subtitle: "Asturias Paraiso Natural",     
      items: [   
          {
              id: 1,
              title: '¿Por qué?',
              paragraph1: 'Gijón es una villa situada en la costa asturiana y considerada por antonomasia la capital de la famosa “Costa Verde”. Así mismo, la ciudad se ha convertido en un referente para los visitantes, no solo por su clima, su patrimonio histórico y cultural y sus paisajes, sino por ofrecer una amplia gama de propuestas lúdicas y culturales, entre los que destacan a nivel nacional eventos como FETEN (Feria Europea de Teatro para niños), el Festival Arco Atlántico, FIDMA (Feria Internacional de Muestras de Asturias), La Semana Negra o el aclamado Metrópoli (Festival Media de Cultura y Entretenimiento) que cuenta con su propia Comic-Con, pasando a convertirse en un festival bianual.',
              paragraph2: 'Nuestra localización en el mapa no podría ser más propicia, Gijón es la única región del noroeste peninsular que acoge un evento de estas características. Siendo una ciudad que actualmente basa parte de su economía en el turismo, supone una cita en el calendario para muchos visitantes.',
              paragraph3: 'Dada la lejanía geográfica y temporal respecto a encuentros similares, la capacidad de convocatoria al evento alcanza las Comunidades Autónomas colindantes de Galicia, Cantabria, País Vasco, Castilla y León, así como la zona norte de Portugal.  Por ello, WeedKend ha ampliado sus propuestas y actividades año a año, logrando congregar a un público más heterogéneo; atraído tanto por las novedades en la oferta musical como por las actividades lúdicas y formativas.'
           },
          {
            id: 2,
            title: 'Repercusión e Impacto',
            paragraph1: 'El sector del cáñamo se encuentra actualmente en expansión, incrementando sus usos y los beneficios derivados año a año. Un evento comercial de estas características supone una ventana de oportunidad a la sociedad asturiana; impulsando la creación de nuevas empresas y puestos de trabajo.  Asturias es una región cuyo motor económico principal durante décadas ha sido la industria, pese que actualmente se encuentra en claro declive, el crecimiento del sector servicios ha supuesto un impuso para la economía y siendo el momento clave para la inserción en nuevos mercados, que ya están comenzando a germinar en la provincia, aunque de forma aún incipiente.',
            paragraph2: 'Así mismo, la existencia de todos los recursos necesarios para el cultivo supone un atractivo añadido para las empresas especializadas, que encuentran en Asturias el clima y los terrenos propicios en los que instalarse; pudiendo aprovechar además las ventajas de ser pioneros en un sector poco explotado en nuestro país.',
            paragraph3: ''
          }
      ]
    };

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsturiasPage');
  }

}
