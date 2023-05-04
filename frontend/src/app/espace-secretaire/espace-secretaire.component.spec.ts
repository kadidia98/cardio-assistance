import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceSecretaireComponent } from './espace-secretaire.component';

describe('EspaceSecretaireComponent', () => {
  let component: EspaceSecretaireComponent;
  let fixture: ComponentFixture<EspaceSecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceSecretaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
