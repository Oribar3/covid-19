import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Summary7TestsComponent } from './summary7-tests.component';

describe('Summary7TestsComponent', () => {
  let component: Summary7TestsComponent;
  let fixture: ComponentFixture<Summary7TestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Summary7TestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Summary7TestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
