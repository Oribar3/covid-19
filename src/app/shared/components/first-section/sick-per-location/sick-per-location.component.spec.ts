import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SickPerLocationComponent } from './sick-per-location.component';

describe('SickPerLocationComponent', () => {
  let component: SickPerLocationComponent;
  let fixture: ComponentFixture<SickPerLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SickPerLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SickPerLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
