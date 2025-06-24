import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoResidentComponent } from './info-resident.component';

describe('InfoResidentComponent', () => {
  let component: InfoResidentComponent;
  let fixture: ComponentFixture<InfoResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoResidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
