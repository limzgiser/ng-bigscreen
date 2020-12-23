/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntBriefComponent } from './ent-brief.component';

describe('EntBriefComponent', () => {
  let component: EntBriefComponent;
  let fixture: ComponentFixture<EntBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
