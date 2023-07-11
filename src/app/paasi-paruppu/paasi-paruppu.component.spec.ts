import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaasiParuppuComponent } from './paasi-paruppu.component';

describe('PaasiParuppuComponent', () => {
  let component: PaasiParuppuComponent;
  let fixture: ComponentFixture<PaasiParuppuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaasiParuppuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaasiParuppuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
