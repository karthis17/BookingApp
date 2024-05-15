import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAddOrEditComponent } from './hotel-add-or-edit.component';

describe('HotelAddOrEditComponent', () => {
  let component: HotelAddOrEditComponent;
  let fixture: ComponentFixture<HotelAddOrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelAddOrEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelAddOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
