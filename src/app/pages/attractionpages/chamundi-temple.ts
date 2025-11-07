import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chamundi-temple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class ChamundiTempleComponent {
  title = 'Chamundi Temple';
  location = 'Mysore, Karnataka';
  heroImage = 'https://images.unsplash.com/photo-1557062975-96113e46608b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=663';

  overview = `
  Perched atop Chamundi Hill, this temple dedicated to Goddess Chamundeshwari is the spiritual symbol of Mysore.
  The climb offers panoramic views and a sense of devotional tradition.
  `;

  history = `
  The temple’s history dates back centuries, with the present structure enhanced during the Vijayanagara period.
  It plays a central role in the Mysore Dasara festivities.
  `;

  weatherSummary = { condition: 'Moderate subtropical', bestTime: 'October – March' };

  monthlyWeather = [
    { month: 'Jan', min: 15, max: 28 }, { month: 'Feb', min: 16, max: 30 },
    { month: 'Mar', min: 18, max: 33 }, { month: 'Apr', min: 20, max: 35 },
    { month: 'May', min: 21, max: 36 }, { month: 'Jun', min: 20, max: 33 },
    { month: 'Jul', min: 19, max: 31 }, { month: 'Aug', min: 19, max: 30 },
    { month: 'Sep', min: 19, max: 30 }, { month: 'Oct', min: 18, max: 31 },
    { month: 'Nov', min: 16, max: 30 }, { month: 'Dec', min: 15, max: 28 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Mysore Airport (15 km).',
    rail: 'Mysore Junction (8 km).',
    road: 'Accessible via NH275 from Bangalore and local roads up Chamundi Hill.'
  };

  highlights = [
    { icon: '⛰️', title: 'Hilltop Views', desc: 'Panoramic vista of Mysore city.' },
    { icon: '🛕', title: 'Deity & Rituals', desc: 'Famous for traditional pujas and festivals.' },
    { icon: '🎊', title: 'Dasara Celebrations', desc: 'Key part of Mysore’s grand festivities.' },
    { icon: '🚶', title: 'Steps & Drives', desc: 'Options to climb steps or drive up to the temple.' }
  ];

  nearby = [
    { name: 'Mysore Palace', img: 'assets/images/mysore-palace.webp', desc: 'Royal palace and museum in the city.' },
    { name: 'Brindavan Gardens', img: 'assets/images/brindavan-gardens.webp', desc: 'Terraced gardens with musical fountain.' },
    { name: 'Karanji Lake', img: 'assets/images/karanji-lake.webp', desc: 'Bird sanctuary and boating area.' }
  ];
}