import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputsComponent } from './search-inputs.component';

describe('SearchInputsComponent', () => {
  let component: SearchInputsComponent;
  let fixture: ComponentFixture<SearchInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
