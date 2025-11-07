import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dwarkadhish-temple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class DwarkadhishTempleComponent {
  title = 'Dwarkadhish Temple';
  location = 'Dwarka, Gujarat';
  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/dwarkadish-temple-01-attr-hero?qlt=82&ts=1726734784547';

  overview = `
  One of the four Char Dham pilgrimage sites, the Dwarkadhish Temple is dedicated to Lord Krishna.
  The five-storied structure stands magnificently on the banks of the Gomti River, reflecting deep devotion and architectural brilliance.
  `;

  history = `
  The temple is believed to have been built over 2,500 years ago by Vajranabh, Lord Krishna’s great-grandson.
  Reconstructed in the 15th–16th centuries, it remains one of India’s holiest Hindu shrines.
  `;

  weatherSummary = {
    condition: 'Hot summers, pleasant winters',
    bestTime: 'October – March'
  };

  monthlyWeather = [
    { month: 'Jan', min: 16, max: 28 },
    { month: 'Feb', min: 18, max: 30 },
    { month: 'Mar', min: 22, max: 33 },
    { month: 'Apr', min: 25, max: 36 },
    { month: 'May', min: 27, max: 37 },
    { month: 'Jun', min: 28, max: 35 },
    { month: 'Jul', min: 27, max: 32 },
    { month: 'Aug', min: 27, max: 32 },
    { month: 'Sep', min: 26, max: 33 },
    { month: 'Oct', min: 24, max: 34 },
    { month: 'Nov', min: 20, max: 31 },
    { month: 'Dec', min: 17, max: 29 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Jamnagar Airport (130 km) connects to major Indian cities.',
    rail: 'Dwarka Railway Station is 2 km from the temple.',
    road: 'NH947 and NH51 connect Dwarka with Jamnagar and Somnath.'
  };

  highlights = [
    { icon: '🛕', title: 'Char Dham Shrine', desc: 'Sacred pilgrimage site dedicated to Lord Krishna.' },
    { icon: '🌊', title: 'Scenic Location', desc: 'Overlooks the tranquil Gomti River.' },
    { icon: '🕰️', title: 'Timings', desc: '6:30 AM – 1:00 PM, 5:00 PM – 9:30 PM' },
    { icon: '💰', title: 'Entry Fee', desc: 'Free for all visitors.' },
  ];

  nearby = [
    { name: 'Rukmini Devi Temple', img: 'assets/images/rukmini-temple.webp', desc: 'Dedicated to Krishna’s consort, Rukmini.' },
    { name: 'Gomti Ghat', img: 'assets/images/gomti-ghat.webp', desc: 'Sacred bathing site beside the temple.' },
    { name: 'Bet Dwarka', img: 'assets/images/bet-dwarka.webp', desc: 'An island temple accessible by boat.' }
  ];
}
