import { Component, ViewChild } from '@angular/core';
import { NavController, App, Nav, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../../services/usuario.service';
import { User } from '../../model/user';

export interface PageInterface{
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Nav) nav: Nav;

  user: User;

  token: string;

  voto:boolean = false;

  

  constructor(public navCtrl: NavController, public app: App, 
    private storage: Storage, private userService: UsuarioService, 
    public alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {
  }

  ngOnInit() {

    const loading = this.loadingCtrl.create({
      content: 'Por favor, espere...'
    });  

    loading.present();
    this.storage.get('sessionData').then(
      (sessionData) => {
        loading.dismiss();
        if (sessionData && sessionData.token){
          this.token = sessionData.token;
          this.userService.getUserByUser(sessionData.token, sessionData.user._id).subscribe(
            userResponse => {
              this.user = this.bindUser(userResponse);
              this.voto = this.user.voto;
            },
            error => {
              console.log(error);
            });
        
        }
        

        
      }
    );
  }

  private bindUser(response: any) {
    debugger;
      return new User(
        response._id, 
        response.id,
        response.user, 
        response.pass, 
        response.description, 
        response.email, 
        response.voto, 
        response.tipo_votante,
        response.muestras
    );
  }

  votar() {
    let alert = this.alertCtrl.create({
      title: '¿Estas seguro de acabar las votaciones?',
      subTitle: 'En el momento que le des a OK no podrás volver a votar, piénsatelo bien!',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Ok',
          handler: data => {
            this.doVoto();
            
          }
        }
      ]    });
    alert.present();


    
  }

    private doVoto(){
      this.userService.votar(this.token, this.user._id).subscribe(
        userResponse => {
          this.voto = userResponse.voto;
        },
        error => {
          console.log(error);
        });
    }
}
