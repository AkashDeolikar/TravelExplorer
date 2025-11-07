import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  contact = { name: '', email: '', message: '' };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      alert(`Thank you, ${this.contact.name}! Your message has been sent.`);
      this.contact = { name: '', email: '', message: '' };
    } else {
      alert('Please fill out all fields.');
    }
  }
}
