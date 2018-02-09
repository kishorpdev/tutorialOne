import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCmpComponent } from './remove-cmp.component';

describe('RemoveCmpComponent', () => {
  let component: RemoveCmpComponent;
  let fixture: ComponentFixture<RemoveCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
