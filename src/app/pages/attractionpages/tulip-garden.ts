import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tulip-garden',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class TulipGardenComponent {
  title = 'Indira Gandhi Memorial Tulip Garden';
  location = 'Srinagar, Jammu & Kashmir';
  heroImage = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Sundarban_Tiger.jpg';

  overview = `
  Asia’s largest tulip garden, nestled at the foothills of the Zabarwan Range,
  overlooks the stunning Dal Lake with over 60 varieties of colorful tulips.
  `;

  history = `
  Opened in 2007, the garden was established to promote floriculture and boost tourism in Kashmir Valley.
  It blooms every spring, attracting visitors from across the world.
  `;

  weatherSummary = { condition: 'Cool climate', bestTime: 'March – May' };

  monthlyWeather = [
    { month: 'Jan', min: -1, max: 7 }, { month: 'Feb', min: 1, max: 10 },
    { month: 'Mar', min: 5, max: 15 }, { month: 'Apr', min: 8, max: 20 },
    { month: 'May', min: 11, max: 25 }, { month: 'Jun', min: 14, max: 29 },
    { month: 'Jul', min: 17, max: 30 }, { month: 'Aug', min: 17, max: 29 },
    { month: 'Sep', min: 13, max: 26 }, { month: 'Oct', min: 8, max: 21 },
    { month: 'Nov', min: 3, max: 15 }, { month: 'Dec', min: -1, max: 8 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Sheikh ul-Alam International Airport (20 km).',
    rail: 'Udhampur Station (230 km) and Jammu Tawi (270 km).',
    road: 'Well connected by NH44 from Jammu and Delhi.'
  };

  highlights = [
    { icon: '🌷', title: 'Spring Bloom', desc: 'Millions of tulips in vibrant colors.' },
    { icon: '📸', title: 'Photography Heaven', desc: 'Perfect spot for nature photography.' },
    { icon: '🎉', title: 'Tulip Festival', desc: 'Annual spring event attracting global tourists.' },
    { icon: '🕰️', title: 'Open Hours', desc: '9:00 AM – 7:00 PM (March–May).' }
  ];

  nearby = [
    { name: 'Dal Lake', img: 'assets/images/dal-lake.webp', desc: 'Iconic lake with houseboats and shikaras.' },
    { name: 'Nishat Bagh', img: 'assets/images/nishat-bagh.webp', desc: 'Mughal garden with terraced lawns.' },
    { name: 'Shankaracharya Temple', img: 'assets/images/shankaracharya-temple.webp', desc: 'Ancient hilltop temple with panoramic views.' }
  ];
}
