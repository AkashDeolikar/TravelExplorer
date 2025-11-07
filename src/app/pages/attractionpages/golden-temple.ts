import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-golden-temple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class GoldenTempleComponent {
  title = 'Golden Temple (Harmandir Sahib)';
  location = 'Amritsar, Punjab';
  heroImage = 'https://plus.unsplash.com/premium_photo-1697730426305-113c62434f97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171';

  overview = `
  The Golden Temple, the holiest Sikh shrine, radiates peace and divinity in the heart of Amritsar.
  Its shimmering gold-covered sanctum sits gracefully amid the sacred Amrit Sarovar lake.
  `;

  history = `
  Built in the 16th century by Guru Arjan Dev Ji, the temple became a symbol of Sikh identity and service.
  It welcomes people of all faiths, offering free community meals (Langar) daily.
  `;

  weatherSummary = { condition: 'Hot summers, cold winters', bestTime: 'October – March' };

  monthlyWeather = [
    { month: 'Jan', min: 6, max: 18 }, { month: 'Feb', min: 9, max: 22 },
    { month: 'Mar', min: 13, max: 28 }, { month: 'Apr', min: 18, max: 35 },
    { month: 'May', min: 23, max: 40 }, { month: 'Jun', min: 26, max: 41 },
    { month: 'Jul', min: 26, max: 35 }, { month: 'Aug', min: 26, max: 34 },
    { month: 'Sep', min: 24, max: 34 }, { month: 'Oct', min: 19, max: 32 },
    { month: 'Nov', min: 12, max: 26 }, { month: 'Dec', min: 7, max: 20 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Sri Guru Ram Dass Jee International Airport (12 km).',
    rail: 'Amritsar Junction connects to Delhi, Mumbai, and Kolkata.',
    road: 'NH3 and NH354 connect Amritsar with major northern cities.'
  };

  highlights = [
    { icon: '🌅', title: 'Spiritual Serenity', desc: 'Golden sanctum glows at sunrise and sunset.' },
    { icon: '🍛', title: 'World’s Largest Langar', desc: 'Free meal served daily to thousands.' },
    { icon: '🕰️', title: 'Open Hours', desc: 'Open 24x7 throughout the year.' },
    { icon: '💰', title: 'Entry Fee', desc: 'Free for all visitors.' }
  ];

  nearby = [
    { name: 'Jallianwala Bagh', img: 'assets/images/jallianwala-bagh.webp', desc: 'Historic site of India’s freedom struggle.' },
    { name: 'Partition Museum', img: 'assets/images/partition-museum.webp', desc: 'Dedicated to stories of 1947 partition.' },
    { name: 'Akal Takht', img: 'assets/images/akal-takht.webp', desc: 'Seat of Sikh temporal authority within temple complex.' }
  ];
}
