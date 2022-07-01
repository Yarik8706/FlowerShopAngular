import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGroupComponent } from './cards-group.component';

describe('CardsGroupComponent', () => {
  let component: CardsGroupComponent;
  let fixture: ComponentFixture<CardsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
