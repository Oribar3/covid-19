import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationStatusAgeComponent } from './vaccination-status-age.component';

describe('VaccinationStatusAgeComponent', () => {
  let component: VaccinationStatusAgeComponent;
  let fixture: ComponentFixture<VaccinationStatusAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationStatusAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinationStatusAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
