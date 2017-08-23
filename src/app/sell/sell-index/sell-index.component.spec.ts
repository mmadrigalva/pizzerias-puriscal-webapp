import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellIndexComponent } from './sell-index.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SellIndexComponent', () => {
  let component: SellIndexComponent;
  let fixture: ComponentFixture<SellIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellIndexComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
