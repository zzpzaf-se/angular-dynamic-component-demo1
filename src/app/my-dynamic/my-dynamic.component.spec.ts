import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDynamicComponent } from './my-dynamic.component';

describe('MyDynamicComponent', () => {
  let component: MyDynamicComponent;
  let fixture: ComponentFixture<MyDynamicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyDynamicComponent]
    });
    fixture = TestBed.createComponent(MyDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
