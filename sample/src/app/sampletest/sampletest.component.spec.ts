import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampletestComponent } from './sampletest.component';

describe('SampletestComponent', () => {
  let component: SampletestComponent;
  let fixture: ComponentFixture<SampletestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampletestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampletestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
