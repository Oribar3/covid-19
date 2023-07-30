import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizationStatusDailyComponent } from './hospitalization-status-daily.component';

describe('HospitalizationStatusDailyComponent', () => {
  let component: HospitalizationStatusDailyComponent;
  let fixture: ComponentFixture<HospitalizationStatusDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalizationStatusDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalizationStatusDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
