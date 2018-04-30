import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Muestra } from './../../model/muestra';
import { MuestraService } from './../../services/muestra.service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NavigateBackComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'muestra',
  templateUrl: 'muestra.component.html',
  styles: ['muestra.component.scss']
})
export class MuestraComponent implements OnChanges{

  @Input()
  muestraId:string;

  muestra = {};

  @Input()
  userId:string;

  constructor(private storage: Storage, private muestraService: MuestraService) {
  }

  ngOnChanges(){

    if (this.muestraId){
      this.storage.get('sessionData').then(
        (sessionData) => {
          console.log(this.muestraId);
          this.muestraService.getMuestraById(sessionData.token, this.muestraId).subscribe(
            muestraResponse => {
              this.muestra = muestraResponse;
            },
            error => {
              console.log(error);
            }
          );
          }
      );
    }
      
    
  }
}
