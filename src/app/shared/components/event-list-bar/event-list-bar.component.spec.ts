/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventListBarComponent } from './event-list-bar.component';

describe('EventListBarComponent', () => {
  let component: EventListBarComponent;
  let fixture: ComponentFixture<EventListBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
