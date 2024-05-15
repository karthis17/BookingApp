import { Component } from '@angular/core';
import { SearchInputsComponent } from '../sharingComponents/search-inputs/search-inputs.component';
import { PopularCities } from '../shared/hotelData';
import { Reusable } from '../shared/reusableFucn';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchInputsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  papularCity = PopularCities;

  reusable: Reusable = new Reusable();

}
