import {Component, Injector, OnInit} from '@angular/core';
import {UnitComponent} from "../unit/unit.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends UnitComponent {

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
