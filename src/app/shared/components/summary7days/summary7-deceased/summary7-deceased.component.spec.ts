import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Summary7DeceasedComponent } from './summary7-deceased.component';

describe('Summary7DeceasedComponent', () => {
  let component: Summary7DeceasedComponent;
  let fixture: ComponentFixture<Summary7DeceasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Summary7DeceasedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Summary7DeceasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
