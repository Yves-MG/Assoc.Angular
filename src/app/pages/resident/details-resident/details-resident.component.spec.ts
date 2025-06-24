import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsResidentComponent } from './details-resident.component';

describe('DetailsResidentComponent', () => {
  let component: DetailsResidentComponent;
  let fixture: ComponentFixture<DetailsResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsResidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
