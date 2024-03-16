import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoreteButtonComponent } from './favorete-button.component';

describe('FavoreteButtonComponent', () => {
  let component: FavoreteButtonComponent;
  let fixture: ComponentFixture<FavoreteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoreteButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoreteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
