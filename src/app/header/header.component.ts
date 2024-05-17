import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../service/user-auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private auth: UserAuthService) { }

  toggle = false;

  dropdown: boolean = false;
  active = 'home';
  user: any;

  ngOnInit() {
    this.auth.isAuthenticated.subscribe(auth => {
      console.log(auth);
      if (auth) {
        this.user = auth;
      } else
        this.user = false;
    });

  }

}
