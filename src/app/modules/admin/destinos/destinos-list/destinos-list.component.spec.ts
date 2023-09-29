import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosListComponent } from './destinos-list.component';

describe('DestinosListComponent', () => {
  let component: DestinosListComponent;
  let fixture: ComponentFixture<DestinosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
