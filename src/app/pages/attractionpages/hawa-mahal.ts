import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hawa-mahal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class HawaMahalComponent {
  title = 'Hawa Mahal';
  location = 'Jaipur, Rajasthan';
  heroImage = 'https://plus.unsplash.com/premium_photo-1697730426305-113c62434f97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171';

  overview = `
  The Hawa Mahal, or "Palace of Winds," is Jaipur’s most iconic pink sandstone structure,
  designed with 953 windows to allow royal women to observe street life unseen.
  `;

  history = `
  Built in 1799 by Maharaja Sawai Pratap Singh, this five-story masterpiece
  reflects Rajputana architecture’s elegance and Mughal influence.
  `;

  weatherSummary = { condition: 'Hot summers, mild winters', bestTime: 'October – March' };

  monthlyWeather = [
    { month: 'Jan', min: 9, max: 22 }, { month: 'Feb', min: 12, max: 26 },
    { month: 'Mar', min: 17, max: 32 }, { month: 'Apr', min: 23, max: 38 },
    { month: 'May', min: 27, max: 41 }, { month: 'Jun', min: 28, max: 40 },
    { month: 'Jul', min: 26, max: 35 }, { month: 'Aug', min: 25, max: 34 },
    { month: 'Sep', min: 24, max: 34 }, { month: 'Oct', min: 20, max: 33 },
    { month: 'Nov', min: 14, max: 28 }, { month: 'Dec', min: 10, max: 23 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Jaipur International Airport (13 km).',
    rail: 'Jaipur Junction (5 km).',
    road: 'NH48 connects Jaipur to Delhi and Ajmer.'
  };

  highlights = [
    { icon: '🏰', title: 'Unique Architecture', desc: '953 windows for air circulation and privacy.' },
    { icon: '🌇', title: 'Sunrise View', desc: 'Golden glow on the pink facade in early morning.' },
    { icon: '🕰️', title: 'Timings', desc: '9:00 AM – 4:30 PM' },
    { icon: '💰', title: 'Entry Fee', desc: '₹50 (Indian), ₹200 (Foreign).' }
  ];

  nearby = [
    { name: 'City Palace', img: 'assets/images/city-palace.webp', desc: 'Royal residence with museums and courtyards.' },
    { name: 'Jantar Mantar', img: 'assets/images/jantar-mantar.webp', desc: 'Astronomical instruments from 18th century.' },
    { name: 'Bapu Bazaar', img: 'assets/images/bapu-bazaar.webp', desc: 'Popular for textiles and handicrafts.' }
  ];
}