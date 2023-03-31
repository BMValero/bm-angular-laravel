import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudaderasComponent } from './sudaderas.component';

describe('SudaderasComponent', () => {
  let component: SudaderasComponent;
  let fixture: ComponentFixture<SudaderasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudaderasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudaderasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
