import {Component, Injector, OnInit} from '@angular/core';
import {InformationCardsService} from "../information-cards.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-unit',
  template: ``
})
export class UnitComponent implements OnInit {

  public informationCardsService: InformationCardsService;
  public store: AngularFirestore;
  public router: Router;
  public modalService: NgbModal;
  public access: boolean;

  constructor(injector: Injector)
  {
    this.modalService = injector.get(NgbModal);
    this.router = injector.get(Router);
    this.store = injector.get(AngularFirestore);
    this.informationCardsService = injector.get(InformationCardsService)
    this.access = localStorage.getItem("access") == "true";
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
