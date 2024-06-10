import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectuerpaiementComponent } from './effectuerpaiement.component';

describe('EffectuerpaiementComponent', () => {
  let component: EffectuerpaiementComponent;
  let fixture: ComponentFixture<EffectuerpaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EffectuerpaiementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EffectuerpaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
