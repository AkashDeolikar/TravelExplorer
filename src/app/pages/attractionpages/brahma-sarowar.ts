import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brahma-sarowar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class BrahmaSarowarComponent {
  title = 'Brahma Sarowar';
  location = 'Kurukshetra, Haryana';
  heroImage = 'https://48koskurukshetra.com/wp-content/uploads/2019/05/6-scaled.jpg';

  overview = `
  Brahma Sarowar is one of the largest man-made ponds in Asia,
  believed to have been created by Lord Brahma for performing the first yajna.
  The tranquil waters hold immense religious significance.
  `;

  history = `
  This sacred site is linked to the Mahabharata and is believed to purify souls.
  It attracts pilgrims especially during solar eclipses and Gita Jayanti.
  `;

  weatherSummary = { condition: 'Warm summers, cool winters', bestTime: 'October – March' };

  monthlyWeather = [
    { month: 'Jan', min: 7, max: 20 }, { month: 'Feb', min: 10, max: 23 },
    { month: 'Mar', min: 15, max: 29 }, { month: 'Apr', min: 20, max: 36 },
    { month: 'May', min: 24, max: 40 }, { month: 'Jun', min: 27, max: 39 },
    { month: 'Jul', min: 26, max: 34 }, { month: 'Aug', min: 26, max: 33 },
    { month: 'Sep', min: 24, max: 33 }, { month: 'Oct', min: 20, max: 31 },
    { month: 'Nov', min: 14, max: 27 }, { month: 'Dec', min: 9, max: 22 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Chandigarh Airport (95 km).',
    rail: 'Kurukshetra Junction (3 km).',
    road: 'Connected via NH44 from Delhi and Chandigarh.'
  };

  highlights = [
    { icon: '🕉️', title: 'Spiritual Bathing', desc: 'Believed to wash away sins when taken during eclipse.' },
    { icon: '🌅', title: 'Evening Aarti', desc: 'Beautiful lights and chants at sunset.' },
    { icon: '🎇', title: 'Gita Jayanti Fair', desc: 'Annual celebration of the Bhagavad Gita’s origin.' },
    { icon: '🕰️', title: 'Visiting Hours', desc: 'Open 5:00 AM – 9:00 PM' }
  ];

  nearby = [
    { name: 'Jyotisar', img: 'assets/images/jyotisar.webp', desc: 'Place where Lord Krishna delivered the Gita.' },
    { name: 'Sheikh Chilli’s Tomb', img: 'assets/images/sheikh-chilli.webp', desc: 'Beautiful Mughal-era monument.' },
    { name: 'Krishna Museum', img: 'assets/images/krishna-museum.webp', desc: 'Showcases art and artifacts from Mahabharata.' }
  ];
}
