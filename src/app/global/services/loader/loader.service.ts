import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController) {}

  async presentProcessingLoading() {
    this.loading = await this.loadingController.create({
      message: 'Processing',
      animated: true,
      backdropDismiss: false,
      showBackdrop: true,
    });
    await this.loading.present();
  }

  async dismissLoader() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }
}
