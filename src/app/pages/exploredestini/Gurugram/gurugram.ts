import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gurugram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gurugram.html',
  styleUrls: ['../city-style.css']
})
export class GurugramComponent {
  city = {
    name: 'Gurugram',
    state: 'Haryana',
    heroImage: 'https://savemax.in/blogs/wp-content/uploads/2024/11/AdobeStock_692844209_Editorial_Use_Only-1-1.jpg',
    tagline: 'Where the future meets urban elegance',
    description: `
      Once a quiet suburb, <strong>Gurugram</strong> has transformed into India’s futuristic business hub.
      From vibrant shopping districts to gourmet dining, tech parks to cultural theatres — Gurugram blends
      innovation, leisure, and luxury in perfect harmony.
    `,
    attractions: [
      {
        name: 'Kingdom of Dreams',
        desc: 'India’s first live entertainment and leisure destination blending culture, art, and cuisine.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Kingdom_of_Dreams_Gurgaon.jpg',
        link: 'https://www.incredibleindia.gov.in/en/haryana/gurugram/kingdom-of-dreams'
      },
      {
        name: 'Cyber Hub',
        desc: 'A buzzing social zone filled with global eateries, bars, and live music venues.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b8/e2/a4/photo5jpg.jpg?w=1200&h=-1&s=1',
        link: 'https://www.cyberhubgurgaon.com/'
      },
      {
        name: 'Leisure Valley Park',
        desc: 'An urban green escape offering musical fountains and serenity in the city center.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d9/37/93/view-near-the-entry-of.jpg?w=900&h=-1&s=1',
        link: 'https://www.tripadvisor.in/Attraction_Review-g297615-d3913058-Reviews-Leisure_Valley_Park-Gurugram_Gurgaon_Gurgaon_District_Haryana.html'
      }
    ],
    travelTips: [
      '🗓️ Best time: November to February.',
      '🚇 Metro: HUDA City Centre (Yellow Line).',
      '🍽️ Try Café Delhi Heights, Indian Grill Room.',
      '🛍️ Don’t miss Ambience Mall and Galleria Market.'
    ]
  };
}
