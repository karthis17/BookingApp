import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserAuthService } from '../service/user-auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  @Output() login = new EventEmitter();


  constructor(private builder: FormBuilder, private auth: UserAuthService) { }

  showErr = false;

  registeerForm: FormGroup = this.builder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  submit() {
    console.log('Submit')
    if (this.registeerForm.valid) {
      this.auth.register(this.registeerForm.value).subscribe(data => { console.log(data); });
    } else {
      this.showErr = true;
    }
  }


}
