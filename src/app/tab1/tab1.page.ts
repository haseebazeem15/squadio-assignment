import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 4.5,
    spaceBetween: 0
  };

  slideOpts1 = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 10
  };

  constructor() {}

}
