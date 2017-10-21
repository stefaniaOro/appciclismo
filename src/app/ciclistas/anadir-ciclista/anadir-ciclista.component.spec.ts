import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirCiclistaComponent } from './anadir-ciclista.component';

describe('AnadirCiclistaComponent', () => {
  let component: AnadirCiclistaComponent;
  let fixture: ComponentFixture<AnadirCiclistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirCiclistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirCiclistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
