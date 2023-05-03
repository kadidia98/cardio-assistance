import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArchiveComponent } from './liste-archive.component';

describe('ListeArchiveComponent', () => {
  let component: ListeArchiveComponent;
  let fixture: ComponentFixture<ListeArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
