import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceComponent } from './rice.component';

describe('BudgetComponent', () => {
  let component: RiceComponent;
  let fixture: ComponentFixture<RiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
