/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RingChartComponent } from './ring-chart.component';

describe('RingChartComponent', () => {
  let component: RingChartComponent;
  let fixture: ComponentFixture<RingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});