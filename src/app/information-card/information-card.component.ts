import {Component, ElementRef, Injector, Input, ViewChild} from '@angular/core';
import {InformationCard} from "../information-card";
import {UnitComponent} from "../unit/unit.component";

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss']
})
export class InformationCardComponent extends UnitComponent {

  @Input() public informationCard: InformationCard;
  @ViewChild('deleteModal') public deleteModal: ElementRef;
  @ViewChild('deleteSuccess') public deleteSuccess: ElementRef;
  @ViewChild('editModal') public editModal: ElementRef;
  @ViewChild('editSuccess') public editSuccess: ElementRef;
  public isEdit: boolean;
  public isDelete: boolean;

  constructor(injector: Injector) {super(injector)}

  ngOnInit(): void {}

  public openEditForm() {
    this.modalService.open(this.editModal, {ariaLabelledBy: 'modal-basic-title'})
  }

  public editCard() {
    this.store.collection<InformationCard>('products').doc(this.informationCard.id).set(this.informationCard).then(_ =>
      this.modalService.open(this.editSuccess, {ariaLabelledBy: 'modal-basic-title'})
    );
  }

  public openDeleteModal():void {
    this.modalService.open(this.deleteModal, {ariaLabelledBy: 'modal-basic-title'})
  }

  public deleteCard():void {
    this.isDelete = true;
    this.store.collection<InformationCard>('products').doc(this.informationCard.id).delete().then(_ =>
      this.modalService.open(this.deleteSuccess, {ariaLabelledBy: 'modal-basic-title'})
    )
  }

  public reloadPage():void {
    location.reload();
  }
}
