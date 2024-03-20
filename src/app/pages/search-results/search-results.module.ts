import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultsPageRoutingModule } from './search-results-routing.module';

import { SearchResultsPage } from './search-results.page';
import { StoreCardModule } from 'src/app/components/store-card/store-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultsPageRoutingModule,
    StoreCardModule,
  ],
  declarations: [SearchResultsPage],
})
export class SearchResultsPageModule {}
