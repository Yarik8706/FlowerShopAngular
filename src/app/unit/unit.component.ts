import {Component, Injector, OnInit} from '@angular/core';
import {InformationCardsService} from "../information-cards.service";

@Component({
  selector: 'app-unit',
  template: ``
})
export class UnitComponent implements OnInit {

  public informationCardsService: InformationCardsService;

  constructor(injector: Injector)
  {
    this.informationCardsService = injector.get(InformationCardsService)
  }

  ngOnInit(): void {
  }

  public SmallScreen(): boolean{
    return window.screen.width <= 420;
  }

  public MiddleScreen(): boolean {
    return window.screen.width <= 1514;
  }

  public BigScreen(): boolean {
    return window.screen.width > 1514;
  }

  public Screen(): number{
    return window.screen.width;
  }

}
