import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mumbai',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mumbai.html',
  styleUrls: ['../city-style.css']
})
export class MumbaiComponent {
  city = {
    name: 'Mumbai',
    state: 'Maharashtra',
    heroImage: 'https://static01.nyt.com/images/2025/11/14/t-magazine/design/14tmag-Mumbai-slide-NVW6/14tmag-Mumbai-slide-NVW6-videoSixteenByNineJumbo1600.jpg',
    tagline: 'The City of Dreams',
    description: `
      <strong>Mumbai</strong> — India’s financial capital and entertainment hub — pulsates with energy, opportunity,
      and creativity. From Marine Drive to Bollywood, it never sleeps.
    `,
    attractions: [
      {
        name: 'Gateway of India',
        desc: 'Mumbai’s iconic arch overlooking the Arabian Sea.',
        image: 'Gateway of India',
        link: 'https://www.incredibleindia.gov.in/en/maharashtra/mumbai/gateway-of-india'
      },
      {
        name: 'Marine Drive',
        desc: 'The Queen’s Necklace — a 3.6 km boulevard with stunning sea views.',
        image: 'https://images.unsplash.com/photo-1642233803470-00129cdeba8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735',
        link: 'https://www.incredibleindia.gov.in/en/maharashtra/mumbai/marine-drive'
      },
      {
        name: 'Elephanta Caves',
        desc: 'UNESCO-listed rock-cut caves dedicated to Lord Shiva on Elephanta Island.',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/1-elephanta-caves-mumbai-maharashtra-attr-hero?qlt=82&ts=1742184509331',
        link: 'https://www.incredibleindia.gov.in/en/maharashtra/mumbai/elephanta-caves'
      }
    ],
    travelTips: [
      '🗓️ Best time: November to February.',
      '🚖 Use metro or local trains to beat traffic.',
      '🌊 Visit Marine Drive during sunset.',
      '🍲 Try Vada Pav, Misal Pav, and local seafood.'
    ]
  };
}
