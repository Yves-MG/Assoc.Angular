import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueEnsembleResidentComponent } from './vue-ensemble-resident.component';

describe('VueEnsembleResidentComponent', () => {
  let component: VueEnsembleResidentComponent;
  let fixture: ComponentFixture<VueEnsembleResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueEnsembleResidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VueEnsembleResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
