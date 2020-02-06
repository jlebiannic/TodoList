import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDuJourComponent } from './date-du-jour.component';

describe('DateDuJourComponent', () => {
  let component: DateDuJourComponent;
  let fixture: ComponentFixture<DateDuJourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDuJourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDuJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
