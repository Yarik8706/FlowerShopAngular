import {Component, ElementRef, Injector, ViewChild} from '@angular/core';
import {UnitComponent} from "../unit/unit.component";
import {InformationCard} from "../information-card";
import {ImageData} from "../get-user-image/get-user-image.component";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent extends UnitComponent {

  @ViewChild('content') productCreateContent: ElementRef;
  public title: string;
  public shortDescription: string;
  public description: string;
  public imageSources: ImageData[];
  public price: number;
  public isHit: boolean = false;

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit(): void {}

  public createProduct():void {
    let item: InformationCard = {
      title: this.title,
      description: this.description,
      shortDescription: this.shortDescription,
      img: this.imageSources,
      hit: this.isHit,
      price: this.price
    }
    this.store.collection<InformationCard>('products').doc().set(item).then(r =>
      this.modalService.open(this.productCreateContent, {ariaLabelledBy: 'modal-basic-title'})
    );
  }
}
