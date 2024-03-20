import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  async presentAlert(_header: string, _message: string, buttonText = 'OK') {
    const alert = await this.alertController.create({
      header: _header,
      message: _message,
      buttons: [buttonText],
    });

    alert.present();
  }
}
