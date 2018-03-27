import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootSlideComponent } from './root-slide.component';

describe('RootSlideComponent', () => {
  let component: RootSlideComponent;
  let fixture: ComponentFixture<RootSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
