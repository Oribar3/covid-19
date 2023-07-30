import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesDiseaseComponent } from './cities-disease.component';

describe('CitiesDiseaseComponent', () => {
  let component: CitiesDiseaseComponent;
  let fixture: ComponentFixture<CitiesDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesDiseaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
