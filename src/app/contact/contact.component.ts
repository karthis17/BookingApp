import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }


  sendEmail() {
    const templateParams = {
      from_name: this.contact.name,
      from_email: this.contact.email,
      message: this.contact.message,
      subject: this.contact.subject,
    };



    emailjs.send('service_eogljq6', 'template_yu42ptd', templateParams, 'VhdwNJMgBjhI15dYU')
      .then((response: EmailJSResponseStatus) => {
        alert('Email sent successfully! ' + response.status + " " + response.text);
        // Optionally reset the form or show a success message
      }, (error) => {
        alert('Failed to send email. Error');
      });
  }


  // sendEmail() {
  //   const { name, email, message, subject } = this.contact;

  //   console.log(name + ' sent', email);

  //   (window as any).Email.send({
  //     Host: 'smtp.gmail.com',
  //     Username: 'recoverid166@gmail.com',
  //     Password: 'xfmj ntmi fvxf hjrm',
  //     To: 'karthisambath01@gmail.com',
  //     From: 'recoverid166@gmail.com',
  //     Subject: `Contact form submission from ${name}`,
  //     Body: `Name: ${name}<br>Subject: ${subject} <br>Email: ${email}<br>Message: ${message}`
  //   }).then((message: string) => {
  //     console.log('Email sent successfully:', message);
  //     // Optionally reset the form or show a success message
  //     this.contact = { name: '', email: '', message: '', subject: '' };
  //   }).catch((error: any) => {
  //     console.error('Failed to send email:', error);
  //   });
  // }
}
