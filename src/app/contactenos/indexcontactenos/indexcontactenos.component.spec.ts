import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcontactenosComponent } from './indexcontactenos.component';

describe('IndexcontactenosComponent', () => {
  let component: IndexcontactenosComponent;
  let fixture: ComponentFixture<IndexcontactenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexcontactenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcontactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
