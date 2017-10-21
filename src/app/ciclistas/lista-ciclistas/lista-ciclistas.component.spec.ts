import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCiclistasComponent } from './lista-ciclistas.component';

describe('ListaCiclistasComponent', () => {
  let component: ListaCiclistasComponent;
  let fixture: ComponentFixture<ListaCiclistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCiclistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCiclistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
