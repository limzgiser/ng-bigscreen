/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntEconomicNatureComponent } from './ent-economic-nature.component';

describe('EntEconomicNatureComponent', () => {
  let component: EntEconomicNatureComponent;
  let fixture: ComponentFixture<EntEconomicNatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntEconomicNatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntEconomicNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
