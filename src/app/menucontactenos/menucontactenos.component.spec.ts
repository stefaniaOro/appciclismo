import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucontactenosComponent } from './menucontactenos.component';

describe('MenucontactenosComponent', () => {
  let component: MenucontactenosComponent;
  let fixture: ComponentFixture<MenucontactenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucontactenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucontactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
