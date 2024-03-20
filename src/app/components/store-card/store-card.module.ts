import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreCardComponent } from './store-card.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/global/pipes/pipes.module';

@NgModule({
  declarations: [StoreCardComponent],
  imports: [CommonModule, IonicModule, RouterModule, PipesModule],
  exports: [StoreCardComponent],
})
export class StoreCardModule {}
