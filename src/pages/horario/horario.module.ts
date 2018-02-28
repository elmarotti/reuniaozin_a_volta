import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorarioPage } from './horario';
import { ModalPage } from '../modal/modal';

@NgModule({
  declarations: [
    HorarioPage,
    ModalPage
  ],
  imports: [
    IonicPageModule.forChild(HorarioPage),
  ],
})
export class HorarioPageModule {}
