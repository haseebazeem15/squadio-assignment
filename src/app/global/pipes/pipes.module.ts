import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from './dicountPipe/discount.pipe';
import { DiscountAllocatedPipe } from './discountAllocated/discount-allocated.pipe';

@NgModule({
  declarations: [DiscountPipe, DiscountAllocatedPipe],
  imports: [CommonModule],
  exports: [DiscountPipe, DiscountAllocatedPipe],
})
export class PipesModule {}
