/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sepet2Component } from './sepet2.component';

describe('Sepet2Component', () => {
  let component: Sepet2Component;
  let fixture: ComponentFixture<Sepet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sepet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sepet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
