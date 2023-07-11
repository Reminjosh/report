import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhalComponent } from './dhal.component';

describe('DhalComponent', () => {
  let component: DhalComponent;
  let fixture: ComponentFixture<DhalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
