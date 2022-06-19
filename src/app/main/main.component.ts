import { Component, OnInit } from '@angular/core';
import {UnitComponent} from "../unit/unit.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends UnitComponent {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
