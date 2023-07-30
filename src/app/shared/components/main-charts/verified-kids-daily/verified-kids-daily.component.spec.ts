import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedKidsDailyComponent } from './verified-kids-daily.component';

describe('VerifiedKidsDailyComponent', () => {
  let component: VerifiedKidsDailyComponent;
  let fixture: ComponentFixture<VerifiedKidsDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedKidsDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedKidsDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
