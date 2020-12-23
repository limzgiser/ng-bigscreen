/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntNatureComponent } from './ent-nature.component';

describe('EntNatureComponent', () => {
  let component: EntNatureComponent;
  let fixture: ComponentFixture<EntNatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntNatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
