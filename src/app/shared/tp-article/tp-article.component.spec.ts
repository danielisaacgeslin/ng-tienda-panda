import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpArticleComponent } from './tp-article.component';

describe('TpArticleComponent', () => {
  let component: TpArticleComponent;
  let fixture: ComponentFixture<TpArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
