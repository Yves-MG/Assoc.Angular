import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentTableComponent } from './resident-table.component';

describe('ResidentTableComponent', () => {
  let component: ResidentTableComponent;
  let fixture: ComponentFixture<ResidentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
