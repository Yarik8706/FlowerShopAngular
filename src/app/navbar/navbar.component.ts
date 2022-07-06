import {Component, Injector} from '@angular/core';
import {UnitComponent} from "../unit/unit.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends UnitComponent {
  address: string = "Калининград, г. Светлогорск, Яблоневая д.7";
  telephone: string = "+79003530891";
  timeWork: string = "24/7";
  isOpenMenu: boolean;

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}

  updateMenuSetting(): void{
    let body = document.getElementsByTagName("body")[0]
    if(this.isOpenMenu) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'scroll';
    }
  }
}
