import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastCtrl: ToastController) {}

  async show(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
    });
    await toast.present();
  }
}
