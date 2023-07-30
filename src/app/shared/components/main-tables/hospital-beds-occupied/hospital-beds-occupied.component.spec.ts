import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBedsOccupiedComponent } from './hospital-beds-occupied.component';

describe('HospitalBedsOccupiedComponent', () => {
  let component: HospitalBedsOccupiedComponent;
  let fixture: ComponentFixture<HospitalBedsOccupiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalBedsOccupiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalBedsOccupiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
