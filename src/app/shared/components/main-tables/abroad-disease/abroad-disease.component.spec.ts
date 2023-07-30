import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadDiseaseComponent } from './abroad-disease.component';

describe('AbroadDiseaseComponent', () => {
  let component: AbroadDiseaseComponent;
  let fixture: ComponentFixture<AbroadDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbroadDiseaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbroadDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
