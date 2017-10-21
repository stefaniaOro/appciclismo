import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndextablaComponent } from './indextabla.component';

describe('IndextablaComponent', () => {
  let component: IndextablaComponent;
  let fixture: ComponentFixture<IndextablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndextablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndextablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
