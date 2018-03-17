import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicinalPage } from './medicinal';

@NgModule({
  declarations: [
    MedicinalPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicinalPage),
  ],
})
export class MedicinalPageModule {}
