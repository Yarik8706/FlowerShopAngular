import {Component, OnInit} from '@angular/core';
import {UnitComponent} from "./unit/unit.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FlowerShopAngular';

  ngOnInit(): void {
    console.log(location)
  }
}
