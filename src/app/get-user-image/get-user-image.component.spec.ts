import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserImageComponent } from './get-user-image.component';

describe('GetUserImageComponent', () => {
  let component: GetUserImageComponent;
  let fixture: ComponentFixture<GetUserImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUserImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
