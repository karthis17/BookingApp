import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  options = {
    name: '',
    from: '',
    subject: '',
    message: '',
    to: "karthisambath@gmail.com",
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs.send('service_eogljq6', 'template_yu42ptd', this.options, 'VhdwNJMgBjhI15dYU')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );

  }

}
