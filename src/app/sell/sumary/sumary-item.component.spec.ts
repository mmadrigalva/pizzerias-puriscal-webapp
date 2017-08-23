import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaryItemComponent } from './sumary-item.component';

describe('SumaryItemComponent', () => {
  let component: SumaryItemComponent;
  let fixture: ComponentFixture<SumaryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumaryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
