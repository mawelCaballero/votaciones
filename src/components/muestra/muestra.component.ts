import { Component, Input, OnChanges } from '@angular/core';
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

  loading:boolean = true;

  expand:boolean = false;

  @Input()
  userId:string;

  @Input()
  votado: boolean;

  constructor(private storage: Storage, private muestraService: MuestraService) {
  }

  ngOnChanges(){

    if (this.muestraId){
      console.log('Votado en muestra?', this.votado);
      this.storage.get('sessionData').then(
        (sessionData) => {
          this.muestraService.getMuestraById(sessionData.token, this.muestraId).subscribe(
            muestraResponse => {
              this.loading = false;
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


  setExpandable(){
    this.expand = !this.expand;
  }
}
