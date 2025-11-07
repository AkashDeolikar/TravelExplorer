import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mahabodhi-temple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class MahabodhiTempleComponent {
  title = 'Mahabodhi Temple';
  location = 'Bodh Gaya, Bihar';
  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/mahabodhi-temple-gaya-bihar-4-attr-hero?qlt=82&ts=1726740645749';

  overview = `
  The Mahabodhi Temple marks the location where Siddhartha Gautama attained enlightenment under the Bodhi tree.
  It is a UNESCO World Heritage Site and an important pilgrimage for Buddhists worldwide.
  `;

  history = `
  The core structure dates to the 5th–6th century CE, with later restorations.
  The site preserves the Bodhi Tree, shrines, and stupas that reflect centuries of devotion.
  `;

  weatherSummary = { condition: 'Subtropical, hot summers', bestTime: 'October – March' };

  monthlyWeather = [
    { month: 'Jan', min: 7, max: 22 }, { month: 'Feb', min: 10, max: 25 },
    { month: 'Mar', min: 15, max: 31 }, { month: 'Apr', min: 20, max: 36 },
    { month: 'May', min: 24, max: 39 }, { month: 'Jun', min: 26, max: 36 },
    { month: 'Jul', min: 25, max: 33 }, { month: 'Aug', min: 24, max: 33 },
    { month: 'Sep', min: 23, max: 33 }, { month: 'Oct', min: 20, max: 32 },
    { month: 'Nov', min: 14, max: 30 }, { month: 'Dec', min: 9, max: 25 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Gaya Airport (12 km).',
    rail: 'Gaya Railway Station (11 km).',
    road: 'Well-connected via NH83 and local roads from Gaya.'
  };

  highlights = [
    { icon: '🕉️', title: 'Bodhi Tree', desc: 'Sacred fig tree at the heart of the complex.' },
    { icon: '🛕', title: 'Stupa & Shrine', desc: 'Ancient architecture and meditation spaces.' },
    { icon: '🕊️', title: 'Pilgrimage', desc: 'Important site for Buddhists from Asia and beyond.' },
    { icon: '🕰️', title: 'Visiting Hours', desc: '5:00 AM – 8:00 PM' }
  ];

  nearby = [
    { name: 'Bodhi Tree Complex', img: 'assets/images/bodhi-tree.webp', desc: 'Meditation and prayer areas around the sacred tree.' },
    { name: 'Great Buddha Statue', img: 'assets/images/great-buddha-statue.webp', desc: 'Large modern statue with gardens.' },
    { name: 'Archaeological Museum', img: 'assets/images/archaeo-museum.webp', desc: 'Artifacts from Buddhist history.' }
  ];
}