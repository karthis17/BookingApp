import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinksComponent } from './bookinks.component';

describe('BookinksComponent', () => {
  let component: BookinksComponent;
  let fixture: ComponentFixture<BookinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
