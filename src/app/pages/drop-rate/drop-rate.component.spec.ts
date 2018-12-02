import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropRateComponent } from './drop-rate.component';

describe('DropRateComponent', () => {
  let component: DropRateComponent;
  let fixture: ComponentFixture<DropRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
