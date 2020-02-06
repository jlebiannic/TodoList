import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilDemoComponent } from './accueil-demo.component';

describe('AccueilDemoComponent', () => {
  let component: AccueilDemoComponent;
  let fixture: ComponentFixture<AccueilDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
