import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkMeterComponent } from './bulk-meter.component';

describe('BulkMeterComponent', () => {
  let component: BulkMeterComponent;
  let fixture: ComponentFixture<BulkMeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulkMeterComponent]
    });
    fixture = TestBed.createComponent(BulkMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
