import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss'],
})
export class StoreCardComponent implements OnInit {

  @Input() name: any;
  @Input() isFeatured: boolean;
  @Input() photo: any;

  constructor() { }

  ngOnInit() {}

}
