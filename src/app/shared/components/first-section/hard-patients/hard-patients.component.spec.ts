import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardPatientsComponent } from './hard-patients.component';

describe('HardPatientsComponent', () => {
  let component: HardPatientsComponent;
  let fixture: ComponentFixture<HardPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardPatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
