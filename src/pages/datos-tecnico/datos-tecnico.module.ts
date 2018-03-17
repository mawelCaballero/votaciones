import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosTecnicoPage } from './datos-tecnico';

@NgModule({
  declarations: [
    DatosTecnicoPage,
  ],
  imports: [
    IonicPageModule.forChild(DatosTecnicoPage),
  ],
})
export class DatosTecnicoPageModule {}
