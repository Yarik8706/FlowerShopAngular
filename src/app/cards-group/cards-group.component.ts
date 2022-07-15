import {Component, Injector} from '@angular/core';
import {UnitComponent} from "../unit/unit.component";
import {InformationCard} from "../information-card";

@Component({
  selector: 'app-cards-group',
  templateUrl: './cards-group.component.html',
  styleUrls: ['./cards-group.component.scss']
})
export class CardsGroupComponent extends UnitComponent {

  public all_products: InformationCard[] = [];
  public isOpenFilterDialog: boolean = false;
  public isLoading: boolean = true;
  public priceFrom: number;
  public priceTo: number;

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.store.collection<InformationCard>('products').get().subscribe(data => {
      data.forEach(dataTour => {
        let tour = dataTour.data();
        tour.id = dataTour.id;
        this.all_products.push(tour);
      })
      this.isLoading = false;
    })
  }
}
