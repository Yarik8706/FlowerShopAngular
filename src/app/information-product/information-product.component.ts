import {Component, Injector} from '@angular/core';
import {UnitComponent} from "../unit/unit.component";
import {InformationCard} from "../information-card";

@Component({
  selector: 'app-information-product',
  templateUrl: './information-product.component.html',
  styleUrls: ['./information-product.component.scss']
})
export class InformationProductComponent extends UnitComponent {

  public informationCard: InformationCard;
  public loading: boolean = true;

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit(): void {
    let articleID = location.pathname.replace("/product/", "");
    this.store.collection<InformationCard>("products").doc(articleID).get().subscribe(data => {
      this.informationCard = data.data();
      this.informationCard.id = data.id;
      this.loading = false;
    })
  }

}
