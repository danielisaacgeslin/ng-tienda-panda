import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpSocialNetworksComponent } from './tp-social-networks.component';

describe('TpSocialNetworksComponent', () => {
  let component: TpSocialNetworksComponent;
  let fixture: ComponentFixture<TpSocialNetworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpSocialNetworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpSocialNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
