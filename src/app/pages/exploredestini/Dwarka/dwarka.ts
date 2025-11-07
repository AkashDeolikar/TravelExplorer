import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dwarka',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dwarka.html',
  styleUrls: ['../city-style.css']
})
export class DwarkaComponent {
  city = {
    name: 'Dwarka',
    state: 'Gujarat',
    heroImage: 'https://s7ap1.scene7.com/is/image/incredibleindia/Dwarka-delight-and-coastal-adventure-trip-hero?qlt=82&ts=1727163607319&wid=800',
    tagline: 'The Sacred Kingdom of Lord Krishna',
    description: `
      <strong>Dwarka</strong> is one of India’s Char Dham pilgrimage sites — believed to be Lord Krishna’s ancient kingdom,
      rich with temples, marine life, and sacred mythology.
    `,
    attractions: [
      {
        name: 'Dwarkadhish Temple',
        desc: 'The main temple dedicated to Lord Krishna, dating back over 2,000 years.',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/dwarkadish-temple-01-attr-hero?qlt=82&ts=1726734784547',
        link: 'https://www.incredibleindia.gov.in/en/gujarat/dwarka/dwarkadhish-temple'
      },
      {
        name: 'Nageshwar Jyotirlinga',
        desc: 'One of the twelve sacred Jyotirlingas of Lord Shiva.',
        image: 'https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/nageshwar-jyotirlinga/Nageshwar-Jyotirlinga-Thumbnail.jpg',
        link: 'https://www.incredibleindia.gov.in/en/gujarat/dwarka/nageshwar-jyotirlinga'
      },
      {
        name: 'Bet Dwarka Island',
        desc: 'An island associated with Lord Krishna’s childhood and sea conch diving.',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/bet-dwarka-dwarka-gujarat-1-attr-hero?qlt=82&ts=1726734714771',
        link: 'https://www.incredibleindia.gov.in/en/gujarat/dwarka/bet-dwarka'
      }
    ],
    travelTips: [
      '🗓️ Best time: October to March.',
      '🚗 Bet Dwarka accessible via ferry from Okha.',
      '🕉️ Carry scarves for temple visits.',
      '📷 Photography restricted inside temples.'
    ]
  };
}
