import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Summary7SevereComponent } from './summary7-severe.component';

describe('Summary7SevereComponent', () => {
  let component: Summary7SevereComponent;
  let fixture: ComponentFixture<Summary7SevereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Summary7SevereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Summary7SevereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
