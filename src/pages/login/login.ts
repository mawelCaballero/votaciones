import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
    private storage: Storage, private authService: AuthService, fb: FormBuilder) {

      this.data = {
        logo: "../assets/imgs/logo/logo_menu.png",
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

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.authService.signInWithEmail(credentials)
			.then(
				() => { 
          this.storage.set("user", this.transformUserId(data.email));
          this.navCtrl.setRoot(HomePage);
        },
				error => this.loginError = error.message
			);
  }


  private transformUserId(email:string) {
    return email.replace('@', '_');
  }

}
