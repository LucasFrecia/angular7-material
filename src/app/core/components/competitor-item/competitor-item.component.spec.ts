import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorItemComponent } from './competitor-item.component';

describe('CompetitorItemComponent', () => {
  let component: CompetitorItemComponent;
  let fixture: ComponentFixture<CompetitorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
