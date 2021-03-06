import { Component } from '@angular/core';
import { NavController, NavParams, Events, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthService} from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  loginError: string;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage, private authService: AuthService, fb: FormBuilder,
    public events: Events, 
    public alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {

      this.data = {
        logo: "../assets/imgs/logo/logo_menu.png",
        headerImage: '../assets/imgs/background-small/login.jpg',
        subtitle        : "Bienvenido",
        title           : "Accede a tu cuenta"
      }

      this.loginForm = fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){
    // Your app login API web service call triggers 

    let data = this.loginForm.value;

		if (!data.email) {
			return;
    }
    
    let loading = this.loadingCtrl.create({
      content: 'Por favor, espere...'
    });

		let credentials = {
			email: data.email,
			password: data.password
    };
    
    loading.present();

		this.authService.signInWithEmail(credentials).subscribe(
        (response) => { 
          loading.dismiss();
          this.storage.set("sessionData", response).then((data)=> {
            this.navCtrl.setRoot(HomePage);
            this.events.publish('user:logged');
          });
          
        },
				error =>  {
         loading.dismiss();
         this.showAlert("Algo no ha ido bien, lo siento. Intentalo de nuevo :) ");
          }
			);
  }



  showAlert(msg:string) {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
  
}
