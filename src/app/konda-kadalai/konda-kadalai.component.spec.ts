import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KondaKadalaiComponent } from './konda-kadalai.component';

describe('KondaKadalaiComponent', () => {
  let component: KondaKadalaiComponent;
  let fixture: ComponentFixture<KondaKadalaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KondaKadalaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KondaKadalaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
