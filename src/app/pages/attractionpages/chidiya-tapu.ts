import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chidiya-tapu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class ChidiyaTapuComponent {
  title = 'Chidiya Tapu (Bird Island)';
  location = 'Port Blair, Andaman & Nicobar Islands';
  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/chidiya-tapu-port-blair-andaman-nicobar-island-1-attr-hero?qlt=82&ts=1726746179374';

  overview = `
  Known as the “Sunset Point” of Andamans, Chidiya Tapu is a tranquil beach surrounded by lush forests,
  mangroves, and vibrant birdlife. It’s perfect for photography, snorkeling, and quiet reflection.
  `;

  history = `
  The name literally means “Bird Island” — home to many migratory species.
  It also suffered from the 2004 tsunami, reshaping its coastline.
  `;

  weatherSummary = { condition: 'Tropical & humid', bestTime: 'October – April' };

  monthlyWeather = [
    { month: 'Jan', min: 24, max: 30 }, { month: 'Feb', min: 25, max: 31 },
    { month: 'Mar', min: 26, max: 32 }, { month: 'Apr', min: 27, max: 33 },
    { month: 'May', min: 27, max: 33 }, { month: 'Jun', min: 26, max: 31 },
    { month: 'Jul', min: 26, max: 30 }, { month: 'Aug', min: 26, max: 30 },
    { month: 'Sep', min: 26, max: 30 }, { month: 'Oct', min: 26, max: 31 },
    { month: 'Nov', min: 25, max: 30 }, { month: 'Dec', min: 24, max: 30 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Veer Savarkar Airport (Port Blair, 28 km).',
    rail: 'No railway — island transport only.',
    road: 'Accessible via scenic road drive from Port Blair.'
  };

  highlights = [
    { icon: '🌅', title: 'Sunset Point', desc: 'Famous for breathtaking sunsets.' },
    { icon: '🦜', title: 'Bird Watching', desc: 'Spot exotic and migratory species.' },
    { icon: '🏝️', title: 'Beach Relaxation', desc: 'Ideal for swimming and photography.' },
    { icon: '🕰️', title: 'Visiting Hours', desc: '6:00 AM – 6:00 PM' }
  ];

  nearby = [
    { name: 'Munda Pahar', img: 'assets/images/munda-pahar.webp', desc: 'Short forest trek with sea views.' },
    { name: 'Wandoor Beach', img: 'assets/images/wandoor.webp', desc: 'White sand and coral reefs.' },
    { name: 'Cellular Jail', img: 'assets/images/cellular-jail.webp', desc: 'Historic colonial prison.' }
  ];
}