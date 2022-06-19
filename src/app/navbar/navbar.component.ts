import { Component, OnInit } from '@angular/core';
import {UnitComponent} from "../unit/unit.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends UnitComponent {
  address: string = "street";
  telephone: string = "+79008007788";
  timeWork: string = "24/7";
  companyName: string = "Название компании";

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
