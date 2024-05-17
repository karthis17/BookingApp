import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserAuthService } from '../service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output() register = new EventEmitter();

  constructor(private builder: FormBuilder, private auth: UserAuthService, private router: Router) { }

  showErr = false;

  loginForm: FormGroup = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  submit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    } else {
      this.showErr = true;
    }
  }

  get() {
    this.auth.me().subscribe(data => { console.log(data); });
  }

}
