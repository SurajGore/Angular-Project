import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sampletest1Component } from './sampletest1.component';

describe('Sampletest1Component', () => {
  let component: Sampletest1Component;
  let fixture: ComponentFixture<Sampletest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sampletest1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sampletest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
