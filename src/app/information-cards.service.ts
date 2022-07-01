import { Injectable } from '@angular/core';
import {InformationCard} from "./information-card";

@Injectable({
  providedIn: 'root'
})
export class InformationCardsService {

  allCards: InformationCard[] = [];

  constructor() { }

  public Init(cards: InformationCard[]) : void{
    this.allCards = cards;
  }
}
