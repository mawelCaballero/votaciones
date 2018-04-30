import { Component, Input, OnChanges } from '@angular/core';
import { VotoService } from './../../services/voto.service';
import { Voto } from '../../model/voto';
import * as _ from 'lodash';
/**
 * Generated class for the NavigateBackComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'voto',
  templateUrl: 'voto.component.html',
  styles: ['voto.component.scss']
})
export class VotoComponent implements OnChanges{

  isLoading:boolean=  true;

  @Input()
  indicadorId: string;

  @Input()
  userId: string;

  @Input()
  muestraId: string;

  @Input()
  token:string;

  valoracion: Number;

  voto: Voto;

  constructor( 
    private votoService: VotoService) {
  }

  ngOnChanges(){

    if (this.indicadorId && this.muestraId && this.userId){
      this.votoService.getVotorByUserMuestraIndicador(this.token,this.userId, this.muestraId, this.indicadorId).subscribe(
        votoResponse => {
          this.voto = votoResponse;
          if (votoResponse && votoResponse.valoracion){
            this.valoracion = votoResponse.valoracion;
          }
          this.isLoading = false;
                  },
        error => {
          console.log(error);
        }
      );
    }
      
    
  }

  change() {
    console.log('Event triggered');
    this.votoService.createVoto(this.token,this.userId, this.muestraId, this.indicadorId, this.valoracion).subscribe(
      votoResponse => {
        this.voto = votoResponse;
        if (votoResponse && votoResponse.valoracion){
          this.valoracion = votoResponse.valoracion;
        }
        
      },
      error => {
        console.log(error);
      }
    );
  }

  isDisabled() {
    return !_.isNil(this.voto) && !_.isNil(this.voto._id)?true:false;
  }
}
