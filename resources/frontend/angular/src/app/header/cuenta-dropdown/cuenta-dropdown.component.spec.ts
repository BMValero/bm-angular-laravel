import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaDropdownComponent } from './cuenta-dropdown.component';

describe('CuentaDropdownComponent', () => {
  let component: CuentaDropdownComponent;
  let fixture: ComponentFixture<CuentaDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
