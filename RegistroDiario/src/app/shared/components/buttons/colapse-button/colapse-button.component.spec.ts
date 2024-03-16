import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColapseButtonComponent } from './colapse-button.component';

describe('ColapseButtonComponent', () => {
  let component: ColapseButtonComponent;
  let fixture: ComponentFixture<ColapseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColapseButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColapseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
