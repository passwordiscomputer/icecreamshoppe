import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlavorComponent } from './add-flavor.component';

describe('AddFlavorComponent', () => {
  let component: AddFlavorComponent;
  let fixture: ComponentFixture<AddFlavorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlavorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
