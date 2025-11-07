import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jagannath-temple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class JagannathTempleComponent {
  title = 'Jagannath Temple';
  location = 'Puri, Odisha';
  heroImage = 'https://dharohar.hargharpuja.com/wp-content/uploads/2024/08/jagannath-temple-1.jpg';

  overview = `
  The Jagannath Temple is a major Hindu pilgrimage site and one of the Char Dham destinations.
  It is famous for its annual Rath Yatra (chariot festival) which draws millions of devotees.
  `;

  history = `
  With origins in the 12th century under King Anantavarman Chodaganga, the temple complex has been a living center of ritual, art, and architecture for centuries.
  `;

  weatherSummary = { condition: 'Tropical coastal', bestTime: 'October – February' };

  monthlyWeather = [
    { month: 'Jan', min: 17, max: 29 }, { month: 'Feb', min: 19, max: 31 },
    { month: 'Mar', min: 22, max: 33 }, { month: 'Apr', min: 25, max: 36 },
    { month: 'May', min: 26, max: 36 }, { month: 'Jun', min: 26, max: 33 },
    { month: 'Jul', min: 25, max: 31 }, { month: 'Aug', min: 25, max: 31 },
    { month: 'Sep', min: 25, max: 31 }, { month: 'Oct', min: 24, max: 31 },
    { month: 'Nov', min: 21, max: 31 }, { month: 'Dec', min: 18, max: 30 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Biju Patnaik International Airport (Bhubaneswar, 60 km).',
    rail: 'Puri Railway Station (2 km).',
    road: 'Well-connected via NH316 and coastal highways.'
  };

  highlights = [
    { icon: '🚩', title: 'Rath Yatra', desc: 'World-famous chariot festival drawing millions.' },
    { icon: '🕍', title: 'Temple Rituals', desc: 'Unique kitchen traditions (largest community kitchen).' },
    { icon: '🏖️', title: 'Puri Beach', desc: 'Sea-side leisure close to the temple.' },
    { icon: '💰', title: 'Pilgrimage', desc: 'Major destination for devotion and culture.' }
  ];

  nearby = [
    { name: 'Puri Beach', img: 'assets/images/puri-beach.webp', desc: 'Popular for sunrise and local snacks.' },
    { name: 'Konark Sun Temple', img: 'assets/images/konark-near-puri.webp', desc: 'World Heritage site about 35 km away.' },
    { name: 'Chilika Lake', img: 'assets/images/chilika-lake.webp', desc: 'Large brackish water lagoon with birdlife.' }
  ];
}