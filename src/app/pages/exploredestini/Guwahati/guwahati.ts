import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guwahati',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guwahati.html',
  styleUrls: ['../city-style.css']
})
export class GuwahatiComponent {
  city = {
    name: 'Guwahati',
    state: 'Assam',
    heroImage: 'https://images.unsplash.com/photo-1611336814186-914161b9bdb6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335',
    tagline: 'Gateway to the Northeast',
    description: `
      <strong>Guwahati</strong> — nestled beside the mighty Brahmaputra — is the cultural and spiritual hub of Assam. 
      With ancient temples, river cruises, and tea-scented breezes, it’s the perfect start to exploring India’s Northeast.
    `,
    attractions: [
      {
        name: 'Kamakhya Temple',
        desc: 'One of India’s most sacred Shakti Peethas dedicated to Goddess Kamakhya.',
        image: 'https://i0.wp.com/thefloatingpebbles.com/wp-content/uploads/2025/02/IMG_3676-Edit-768x1024-1.jpg?resize=768%2C1024&ssl=1',
        link: 'https://en.wikipedia.org/wiki/Kamakhya_Temple'
      },
      {
        name: 'Umananda Island',
        desc: 'The world’s smallest inhabited river island, accessible by ferry.',
        image: 'https://static.toiimg.com/thumb/112013182/Umananda-island-in-Guwahati.jpg?width=1200&height=900',
        link: 'https://en.wikipedia.org/wiki/Umananda_Temple'
      },
      {
        name: 'Assam State Zoo & Botanical Garden',
        desc: 'A green sanctuary housing rare wildlife species and lush flora.',
        image: 'https://naparks.com/wp-content/uploads/2023/06/Assam-State-Zoo-Cum-Botanical-Garden-Peacock-1024x538.webp',
        link: 'https://en.wikipedia.org/wiki/Assam_State_Zoo'
      }
    ],
    travelTips: [
      '🗓️ Best time: October to April.',
      '🛶 Take a sunset cruise on the Brahmaputra River.',
      '🍵 Visit local tea gardens for a guided tasting.',
      '🎉 Experience Bihu festivals for Assamese culture.'
    ]
  };
}
