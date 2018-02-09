import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCmpComponent } from './insert-cmp.component';

describe('InsertCmpComponent', () => {
  let component: InsertCmpComponent;
  let fixture: ComponentFixture<InsertCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
