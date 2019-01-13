import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentViewComponent } from './competitor-view.component';

describe('ComponentViewComponent', () => {
  let component: ComponentViewComponent;
  let fixture: ComponentFixture<ComponentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
