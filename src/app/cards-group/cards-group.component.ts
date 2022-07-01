import {Component, Injector, OnInit} from '@angular/core';
import {UnitComponent} from "../unit/unit.component";

@Component({
  selector: 'app-cards-group',
  templateUrl: './cards-group.component.html',
  styleUrls: ['./cards-group.component.scss']
})
export class CardsGroupComponent extends UnitComponent {
  isOpenFilterDialog: boolean = false;

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log(location.pathname)
  }

}
