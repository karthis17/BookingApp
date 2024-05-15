import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SearchInputsComponent } from './sharingComponents/search-inputs/search-inputs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchInputsComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookingApp';

  constructor(private router: Router) { }

  isAdminRoute(): boolean {
    return this.router.url.includes('/admin'); // Check if the current route contains '/admin'
  }

}
