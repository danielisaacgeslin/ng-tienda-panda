import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpOrderBySelectComponent } from './tp-order-by-select.component';

describe('TpOrderBySelectComponent', () => {
  let component: TpOrderBySelectComponent;
  let fixture: ComponentFixture<TpOrderBySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpOrderBySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpOrderBySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
