import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpToastrComponent } from './tp-toastr.component';

describe('TpToastrComponent', () => {
  let component: TpToastrComponent;
  let fixture: ComponentFixture<TpToastrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpToastrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpToastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
