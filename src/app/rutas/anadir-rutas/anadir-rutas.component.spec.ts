import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirRutasComponent } from './anadir-rutas.component';

describe('AnadirRutasComponent', () => {
  let component: AnadirRutasComponent;
  let fixture: ComponentFixture<AnadirRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
