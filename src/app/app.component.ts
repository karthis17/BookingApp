import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SearchInputsComponent } from './sharingComponents/search-inputs/search-inputs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserAuthService } from './service/user-auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchInputsComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookingApp';

  constructor(private router: Router, private auth: UserAuthService) { }

  isAdminRoute(): boolean {
    return this.router.url.includes('/admin'); // Check if the current route contains '/admin'
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      window.scrollBy(0, -window.pageYOffset);
    });

    this.auth.me().subscribe(au => {
      this.auth.isAuthenticated.next(au);
      console.log(au);
    }, err => {
      this.auth.isAuthenticated.next(false);
    });
  }

}
