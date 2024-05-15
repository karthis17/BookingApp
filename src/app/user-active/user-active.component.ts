import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-user-active',
  standalone: true,
  imports: [LoginComponent, RegisterComponent, NgIf],
  templateUrl: './user-active.component.html',
  styleUrl: './user-active.component.css',
  animations: [
    trigger('flipAnimation', [
      transition('login <=> register', [
        style({ transform: 'rotateY(0)' }),
        animate('0.5s', style({ transform: 'rotateY(180deg)' }))
      ])
    ])
  ]
})
export class UserActiveComponent {

  showLoginForm = true;

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
  }
}
