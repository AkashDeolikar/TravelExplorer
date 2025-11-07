import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-balaji-temple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class BalajiTempleComponent {
  title = 'Sri Venkateswara Temple (Tirupati)';
  location = 'Tirupati, Andhra Pradesh';
  heroImage = 'https://images.unsplash.com/photo-1733805569204-41768c7d8c0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1227';

  overview = `
  One of the most visited Hindu temples in the world, Tirupati Balaji is dedicated to Lord Venkateswara.
  It’s renowned for its grand rituals, massive pilgrimage volumes, and rich temple traditions.
  `;

  history = `
  The temple’s recorded history spans many centuries with patronage from Pallavas, Cholas, and Vijayanagara rulers.
  Devotees visit year-round, especially during Brahmotsavam festival.
  `;

  weatherSummary = { condition: 'Tropical, hot summers', bestTime: 'September – February' };

  monthlyWeather = [
    { month: 'Jan', min: 18, max: 30 }, { month: 'Feb', min: 19, max: 31 },
    { month: 'Mar', min: 21, max: 34 }, { month: 'Apr', min: 24, max: 38 },
    { month: 'May', min: 26, max: 39 }, { month: 'Jun', min: 24, max: 35 },
    { month: 'Jul', min: 23, max: 32 }, { month: 'Aug', min: 23, max: 31 },
    { month: 'Sep', min: 23, max: 31 }, { month: 'Oct', min: 22, max: 31 },
    { month: 'Nov', min: 20, max: 30 }, { month: 'Dec', min: 19, max: 30 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Tirupati Airport (15 km).',
    rail: 'Tirupati Railway Station (3–6 km depending on terminal).',
    road: 'Well-connected via NH71 and local roads; queues for darshan common.'
  };

  highlights = [
    { icon: '🙏', title: 'Darshan & Sevas', desc: 'Multiple darshan options and seva experiences.' },
    { icon: '🎉', title: 'Brahmotsavam', desc: 'Major annual festival attracting millions.' },
    { icon: '🏛️', title: 'Temple Complex', desc: 'Ancient architecture and temple museums.' },
    { icon: '💰', title: 'Donations', desc: 'Offerings, hair tonsure, and prasadam services.' }
  ];

  nearby = [
    { name: 'Tirumala Hills', img: 'assets/images/tirumala-hills.webp', desc: 'Sacred hills surrounding the temple.' },
    { name: 'Silathoranam', img: 'assets/images/silathoranam.webp', desc: 'Natural rock formation nearby.' },
    { name: 'Sri Venkateswara National Park', img: 'assets/images/venkateswara-park.webp', desc: 'Protected forest area for nature lovers.' }
  ];
}