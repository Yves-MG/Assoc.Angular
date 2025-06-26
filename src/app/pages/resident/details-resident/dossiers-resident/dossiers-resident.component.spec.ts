import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersResidentComponent } from './dossiers-resident.component';

describe('DossiersResidentComponent', () => {
  let component: DossiersResidentComponent;
  let fixture: ComponentFixture<DossiersResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossiersResidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossiersResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
