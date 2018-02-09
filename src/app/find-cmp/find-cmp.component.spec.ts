import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCmpComponent } from './find-cmp.component';

describe('FindCmpComponent', () => {
  let component: FindCmpComponent;
  let fixture: ComponentFixture<FindCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
