import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpTitleComponent } from './tp-title.component';

describe('TpTitleComponent', () => {
  let component: TpTitleComponent;
  let fixture: ComponentFixture<TpTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
