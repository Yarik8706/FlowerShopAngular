import {Component, Injector} from '@angular/core';
import {UnitComponent} from "../unit/unit.component";

export interface InformationNews {
  img: string,
  title: string,
  shortDescription: string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends UnitComponent {

  images: InformationNews[] = [
    {img: "https://gorcveti.tomsk.ru/assets/img/main-banner/06-min.png", title: "Описание новости магазина", shortDescription: "Описание"},
    {img: "../../assets/image_1.jpg", title: "Описание новости магазина", shortDescription: "Описание"},
    {img: "../../assets/image_2.jpg", title: "Описание новости магазина", shortDescription: "Описание"}
  ];

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}

  paused = false;
  unpauseOnArrow = false;
  pauseOnHover = true;
  pauseOnFocus = true;
}
