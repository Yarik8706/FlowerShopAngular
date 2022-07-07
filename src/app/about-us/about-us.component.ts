import {Component, Injector, OnInit} from '@angular/core';
import {UnitComponent} from "../unit/unit.component";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent extends UnitComponent{

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
