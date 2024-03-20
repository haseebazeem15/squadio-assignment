import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountAllocated',
})
export class DiscountAllocatedPipe implements PipeTransform {
  transform(value: string, discount: string): string | number {
    if (!value || !discount) {
      return value;
    }

    const actualPrice = parseFloat(value.slice(1));
    const discountValue = parseFloat(discount.replace('%', ''));

    const discountedPrice = actualPrice - actualPrice * (discountValue / 100);
    return (actualPrice - discountedPrice).toFixed(2);
  }
}
