import { Component, ViewChild } from '@angular/core';
import { NavController, App, Nav } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../../services/usuario.service';

export interface PageInterface {
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

  user = {};

  constructor(public navCtrl: NavController, public app: App, 
    private storage: Storage, private userService: UsuarioService) {
      this.storage.get('sessionData').then(
        (sessionData) => {
  
          if (sessionData.token){
            this.userService.getUserByUser(sessionData.token, sessionData.user._id).subscribe(
              userResponse => {
                this.user = userResponse;
              },
              error => {
                console.log(error);
              });
          
          }
          

          
        }
      );

  }

}
