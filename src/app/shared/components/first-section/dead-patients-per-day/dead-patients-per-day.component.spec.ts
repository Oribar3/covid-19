import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadPatientsPerDayComponent } from './dead-patients-per-day.component';

describe('DeadPatientsPerDayComponent', () => {
  let component: DeadPatientsPerDayComponent;
  let fixture: ComponentFixture<DeadPatientsPerDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadPatientsPerDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeadPatientsPerDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
