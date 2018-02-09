import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCmpComponent } from './update-cmp.component';

describe('UpdateCmpComponent', () => {
  let component: UpdateCmpComponent;
  let fixture: ComponentFixture<UpdateCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
