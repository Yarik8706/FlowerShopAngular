import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionToInformationComponent } from './transition-to-information.component';

describe('TransitionToInformationComponent', () => {
  let component: TransitionToInformationComponent;
  let fixture: ComponentFixture<TransitionToInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionToInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionToInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
