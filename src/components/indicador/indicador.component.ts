import { Component, Input, OnChanges } from '@angular/core';
import { Indicador } from './../../model/indicador';
import { IndicadorService } from './../../services/indicador.service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NavigateBackComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'indicador',
  templateUrl: 'indicador.component.html',
  styles: ['indicador.component.scss']
})
export class IndicadorComponent implements OnChanges{

  @Input()
  indicadorId : string;

  @Input()
  muestraId: string;

  @Input()
  userId: string;

  token:string;

  indicador = {};

  constructor(private storage: Storage, 
    private indicadorService: IndicadorService) {
  }

  ngOnChanges(){

    if (this.indicadorId && this.muestraId){
      this.storage.get('sessionData').then(
        (sessionData) => {
          this.token = sessionData.token;
          console.log(this.indicadorId);
          this.indicadorService.getIndicadorById(sessionData.token, this.indicadorId).subscribe(
            indicadorResponse => {
              this.indicador = indicadorResponse;
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
