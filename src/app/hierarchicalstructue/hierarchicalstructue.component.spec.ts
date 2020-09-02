import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalstructueComponent } from './hierarchicalstructue.component';

describe('HierarchicalstructueComponent', () => {
  let component: HierarchicalstructueComponent;
  let fixture: ComponentFixture<HierarchicalstructueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchicalstructueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchicalstructueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
