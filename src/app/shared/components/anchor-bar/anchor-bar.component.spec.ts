import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorBarComponent } from './anchor-bar.component';

describe('AnchorBarComponent', () => {
  let component: AnchorBarComponent;
  let fixture: ComponentFixture<AnchorBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchorBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
