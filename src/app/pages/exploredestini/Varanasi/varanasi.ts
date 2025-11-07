import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-varanasi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './varanasi.html',
  styleUrls: ['../city-style.css']
})
export class VaranasiComponent {
  city = {
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    heroImage: 'https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    tagline: 'The Eternal City of Spiritual Awakening',
    description: `
      <strong>Varanasi</strong>, one of the world’s oldest living cities, is a tapestry of rituals, spirituality, and
      vibrant chaos. Every ghat tells a story — of devotion, philosophy, and life’s eternal cycle.
    `,
    attractions: [
      {
        name: 'Dashashwamedh Ghat',
        desc: 'The heart of Varanasi’s evening Ganga Aarti — an unforgettable experience of devotion.',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/dashashwamedh-ghat-varanasi-uttar-pradesh-5-attr-hero?qlt=82&ts=1727353292128',
        link: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/varanasi/dashashwamedh-ghat'
      },
      {
        name: 'Kashi Vishwanath Temple',
        desc: 'One of the twelve Jyotirlingas of Lord Shiva, revered across India.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kashi_Vishwanath.jpg/500px-Kashi_Vishwanath.jpg',
        link: 'https://www.shrikashivishwanath.org/'
      },
      {
        name: 'Sarnath',
        desc: 'The place where Lord Buddha delivered his first sermon after enlightenment.',
        image: 'https://shrikashidham.com/wp-content/uploads/2023/09/sarnath-varanasi-e1693918484606.jpg',
        link: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/varanasi/sarnath'
      }
    ],
    travelTips: [
      '🗓️ Best time: October to March.',
      '🛶 Morning boat rides on the Ganges are magical.',
      '🕉️ Visit the temple before 8 AM to avoid crowds.',
      '📿 Respect local customs and dress modestly.'
    ]
  };
}
