import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActividadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actividades',
  templateUrl: 'actividades.html',
})
export class ActividadesPage {

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data =  
  { 
    headerTitle: "Actividades",
    headerImage: '../assets/imgs/background-small/detalles_tecnicos.jpg',
    title: "",
    subtitle: "",     
    items: [   
        {
            id: 1,
            title: ' Ciclo de conferencias',
            paragraph1: 'La formación y la información son dos pilares clave para lograr la normalización y el fin de la estigmatización del cannabis, sus usos y las empresas relacionadas con dicho sector. Asociar la imagen de marca con actividades que persiguen este objetivo, supone llegar a un público más amplio, dada la notoriedad que alcanzan estas reivindicaciones a día de hoy y su gran difusión en medios de comunicación.',
            paragraph2: 'Uno de los principales atractivos del evento es el ciclo de conferencias. El equipo administrativo, junto con el departamento de marketing y comunicación, aúnan esfuerzos para cada año programar charlas informativas y educativas acerca de los temas más candentes del panorama cannábico (usos terapéuticos, cultivo, información y asesoramiento legal…)',
            paragraph3: 'Otro punto relativo a las charlas y que es un apoyo importante para el evento y nuestra causa, es la asistencia de ponentes del más alto nivel. Además, en nuestra edición del 2017 tuvo lugar por primera vez una mesa redonda con representantes de casi todos los partidos políticos, donde se debatieron de nuevo los argumentos de cada grupo acerca de la propuesta no de ley plateada en el Parlamento Asturiano.'
         },
        {
          id: 2,
          title: 'Música en directo',
          paragraph1: 'Contamos con una dilatada experiencia trabajando con innumerables artistas, tanto de nuestra región como artistas de tirón nacional. Todos nuestros eventos cuentan con música en directo, siempre enfocada a la amplia diversidad de gustos del público asistente.',
          paragraph2: 'En el último año, Barbass Sound se ha unido a Weedkend en una alianza laboral, aportando su amplia experiencia en el sector musical, gracias a ello ha surgido la creación de un CD, que ya está siendo presentado por el territorio nacional y que ha  contado con la colaboración de artistas de remonbre, como son Ganjahr Family, Rapsusklei, Kulto de Kultibo, Lasai y Garolo. Esta gira de presentación tendrá su colofón en el evento Weedkend, por ello, la garantía de música en directo, de calidad y con variedad es un hecho.',
          paragraph3: 'Sin perder nuestra esencia, las instalaciones para la música y los conciertos estarán situadas en una zona más amplia y exterior, con una mejor ubicación para que la fiesta no decaiga.'
        },
        {
          id: 3,
          title: 'Arte Urbano',
          paragraph1: 'Nuestra relación con la cultura urbana y el arte han estado presentes desde nuestros inicios. Cada año este apartado cobra más protagonismo, traspasando las fronteras de lo convencional y organizando actividades que cautivan y sorprenden a los presentes.',
          paragraph2: 'Grafiti, Break Dance, espectáculo circense, títeres… son sólo algunos ejemplos de los espectáculos de los que hemos podido disfrutar en ediciones anteriores; momentos que completan el evento y logran una mayor conexión con el público que nos visita.',
          paragraph3: 'El deporte urbano también forma parte de nuestra sección de arte urbano, siendo una de nuestras ambiciones disponer de un recinto para su práctica durante el evento (skaters, rollers, bikers…)',
          paragraph5: 'Esta sección es una de las que más ha crecido de WeedKend, captando la atención de empresas nacionales e internacionales que ya trabajan en otros eventos patrocinando actividades similares.  '
        },
        {
          id: 4,
          title: 'Copa Canábica',
          paragraph1: 'Tres copas impecables nos avalan, y las ganas de seguir creciendo para afianzar WeedKend como referente para los mejores cultivadores del país.',
          paragraph2: 'Los pilares sobre los que creamos la copa son la integridad y la transparencia. El anonimato de los participantes resulta de gran importancia para nosotros, así como que nuestro sistema de evaluación siga siendo fiable y justo. Una de nuestras prioridades es ofrecer a todo el mundo la posibilidad de participar de forma gratuita en la Cannabis Weedkend Cup. Apelando a nuestra filosofía de compartir, creemos que el trabajo y dedicación que ponen los cultivadores en obtener sus flores es motivo más que suficiente para que la organización se encargue del resto de gestiones.',
          paragraph3: 'El jurado, parte esencial del proceso, avalado por su experiencia y conocimientos, garantiza la fiabilidad de la evaluación, que tan importante resulta para nuestro equipo. Del mismo modo, la organización cada año de revisar, modificar y ampliar los estándares y criterios de evaluación para que las calificaciones sean precisas.',
          paragraph5: 'Reseñable resulta el crecimiento constante y progresivo del número de participantes en la copa, así como la calidad de las muestras aportadas; teniendo cada vez más visibilidad y reconocimiento entre las copas cannábicas nacionales y los cultivadores, tanto nacionales como internacionales, que compiten en las mismas.'
        }
    ]
  };
}
   

ionViewDidLoad() {
  console.log('ionViewDidLoad StandsPage');
}

}
