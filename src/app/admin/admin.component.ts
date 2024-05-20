import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ActiveWindowService } from '../service/active-window.service';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, QuillModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private router: Router, private active: ActiveWindowService) { }


  navItems: any[] = [
    { link: '/admin', name: 'Home', icon: 'fa-house' },
    { link: '/admin/hotels', name: 'Hotel', icon: 'fa-hotel' },
    { link: '/admin/bookings', name: 'Bookings', icon: 'fa-book-bookmark' },
  ]

  nav(link: any) {
    this.router.navigateByUrl(link);
  }

  display = '';

  ngOnInit() {
    this.active.activeRouter.subscribe(name => this.display = name)
  }



}
