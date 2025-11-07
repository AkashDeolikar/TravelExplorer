import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-virupaksha-temple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class VirupakshaTempleComponent {
  title = 'Virupaksha Temple';
  location = 'Hampi, Karnataka';
  heroImage = 'https://www.karnataka.com/wp-content/uploads/2011/06/virupaksha-temple-hampi-1280x720.jpg';

  overview = `
  A magnificent 7th-century temple complex in Hampi dedicated to Lord Shiva (Virupaksha),
  renowned for its towering gopura, intricate carvings, and active worship traditions.
  `;

  history = `
  Part of the UNESCO World Heritage ruins of Hampi, Virupaksha has been a center of pilgrimage and royal patronage for centuries,
  preserving Vijayanagara architecture and religious life.
  `;

  weatherSummary = { condition: 'Hot semi-arid', bestTime: 'October – February' };

  monthlyWeather = [
    { month: 'Jan', min: 15, max: 30 }, { month: 'Feb', min: 17, max: 33 },
    { month: 'Mar', min: 20, max: 36 }, { month: 'Apr', min: 24, max: 39 },
    { month: 'May', min: 25, max: 41 }, { month: 'Jun', min: 24, max: 36 },
    { month: 'Jul', min: 23, max: 33 }, { month: 'Aug', min: 23, max: 32 },
    { month: 'Sep', min: 22, max: 32 }, { month: 'Oct', min: 20, max: 31 },
    { month: 'Nov', min: 17, max: 31 }, { month: 'Dec', min: 15, max: 30 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Hubli and Bellary airports (100–140 km).',
    rail: 'Hospet Junction (13 km) is the nearest railhead.',
    road: 'Accessible via NH67 and regional roads to Hospet.'
  };

  highlights = [
    { icon: '🛕', title: 'Ancient Carvings', desc: 'Finely carved pillars and sculptures.' },
    { icon: '🏺', title: 'Historic Complex', desc: 'Part of the larger Hampi UNESCO site.' },
    { icon: '🎉', title: 'Festivals', desc: 'Annual chariot festival draws pilgrims.' },
    { icon: '📷', title: 'Photo Spots', desc: 'Riverside ruins and sunrise views.' }
  ];

  nearby = [
    { name: 'Virupaksha Bazaar', img: 'assets/images/virupaksha-bazaar.webp', desc: 'Historic market area near the temple.' },
    { name: 'Vittala Temple', img: 'assets/images/vittala-temple.webp', desc: 'Famous for musical pillars and stone chariot.' },
    { name: 'Matanga Hill', img: 'assets/images/matanga-hill.webp', desc: 'Sunrise viewpoint over Hampi ruins.' }
  ];
}
