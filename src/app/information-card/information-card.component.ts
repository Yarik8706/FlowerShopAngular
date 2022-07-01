import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss']
})
export class InformationCardComponent implements OnInit {

  @Input() title: string = "Название букета";
  @Input() price: string = "Цена букета";
  @Input() img: string = "https://gorcveti.tomsk.ru/assets/cache_image/products/1613/1635401019f61a74de-e9ec-48e9-b9ca-7675f1d33399_1000x0_07e.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
