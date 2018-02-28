import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NovaPaginaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-pagina',
  templateUrl: 'nova-pagina.html',
})
export class NovaPaginaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaPaginaPage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Você marcou reunião!',
      subTitle: 'Segunda 15h',
      buttons: ['Ok']
    });
    alert.present();
  }
}
