import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Summary7VerifiedComponent } from './summary7-verified.component';

describe('Summary7VerifiedComponent', () => {
  let component: Summary7VerifiedComponent;
  let fixture: ComponentFixture<Summary7VerifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Summary7VerifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Summary7VerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
