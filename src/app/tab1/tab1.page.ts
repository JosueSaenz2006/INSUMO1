import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['styles.css']
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

async presentAlert(){
  const alert = await this.alertController.create({
header: 'Alerta',
subHeader: 'Alerta de Ionic',
message: 'Hola desde Alerta ionic',
buttons: ['ok','cancel'],

  });

  await alert.present();
}


async presentAlert2(){
  const alert = await this.alertController.create({
header: 'Alerta2',
subHeader: 'Alerta de Ionic 2',
message: 'Hola desde Alerta ionic 2',
buttons: ['ok 2','cancel 2'],

  });

  await alert.present();
}

}
