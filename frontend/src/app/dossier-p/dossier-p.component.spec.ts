import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierPComponent } from './dossier-p.component';

describe('DossierPComponent', () => {
  let component: DossierPComponent;
  let fixture: ComponentFixture<DossierPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossierPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
