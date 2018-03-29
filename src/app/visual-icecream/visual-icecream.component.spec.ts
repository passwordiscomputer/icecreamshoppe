import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualIcecreamComponent } from './visual-icecream.component';

describe('VisualIcecreamComponent', () => {
  let component: VisualIcecreamComponent;
  let fixture: ComponentFixture<VisualIcecreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualIcecreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualIcecreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
