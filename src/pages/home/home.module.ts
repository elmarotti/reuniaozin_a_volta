import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { NovaPaginaPage } from '../nova-pagina/nova-pagina';

@NgModule({
  declarations: [
    HomePage,
    NovaPaginaPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
