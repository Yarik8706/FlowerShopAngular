import {Component, Injector} from '@angular/core';
import {UnitComponent} from "./unit/unit.component";
import {InformationCard} from "./information-card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends UnitComponent {
  title = 'FlowerShopAngular';

  ngOnInit(): void {}

  constructor(injector: Injector) {
    super(injector);
  }
}
