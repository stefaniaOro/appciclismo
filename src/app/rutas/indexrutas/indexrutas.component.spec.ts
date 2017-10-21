import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexrutasComponent } from './indexrutas.component';

describe('IndexrutasComponent', () => {
  let component: IndexrutasComponent;
  let fixture: ComponentFixture<IndexrutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexrutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
