/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarBacktobackComponent } from './bar-backtoback.component';

describe('BarBacktobackComponent', () => {
  let component: BarBacktobackComponent;
  let fixture: ComponentFixture<BarBacktobackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarBacktobackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarBacktobackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
