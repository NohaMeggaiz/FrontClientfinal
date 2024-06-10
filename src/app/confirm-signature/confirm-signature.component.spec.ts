import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSignatureComponent } from './confirm-signature.component';

describe('ConfirmSignatureComponent', () => {
  let component: ConfirmSignatureComponent;
  let fixture: ComponentFixture<ConfirmSignatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmSignatureComponent]
    });
    fixture = TestBed.createComponent(ConfirmSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
