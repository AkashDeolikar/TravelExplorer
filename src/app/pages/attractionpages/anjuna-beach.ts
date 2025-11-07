import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anjuna-beach',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class AnjunaBeachComponent {
  title = 'Anjuna Beach';
  location = 'Anjuna, Goa';
  heroImage = 'https://images.unsplash.com/photo-1646748019039-e908f7e41282?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170';

  overview = `
  Anjuna Beach is famous for its bohemian vibe, rocky headlands, flea market, and lively nightlife.
  It attracts backpackers and artists and is a gateway to Goa’s eclectic music and cafe scene.
  `;

  history = `
  Once a hippie hangout in the 1960s–70s, Anjuna evolved into a popular tourist hub while retaining its relaxed charm.
  The Wednesday flea market is a highlight for visitors.
  `;

  weatherSummary = { condition: 'Tropical coastal', bestTime: 'November – February' };

  monthlyWeather = [
    { month: 'Jan', min: 21, max: 32 }, { month: 'Feb', min: 22, max: 33 },
    { month: 'Mar', min: 24, max: 34 }, { month: 'Apr', min: 25, max: 35 },
    { month: 'May', min: 26, max: 35 }, { month: 'Jun', min: 25, max: 31 },
    { month: 'Jul', min: 25, max: 30 }, { month: 'Aug', min: 25, max: 30 },
    { month: 'Sep', min: 25, max: 31 }, { month: 'Oct', min: 25, max: 32 },
    { month: 'Nov', min: 24, max: 32 }, { month: 'Dec', min: 22, max: 32 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Dabolim Airport (35 km).',
    rail: 'Madgaon Railway Station (20 km) and Thivim (30 km).',
    road: 'Accessible via NH66 and local roads from Panaji and Mapusa.'
  };

  highlights = [
    { icon: '🏖️', title: 'Beaches & Rocks', desc: 'Several small coves and scenic headlands.' },
    { icon: '🛍️', title: 'Flea Market', desc: 'Local crafts, clothing, and souvenirs.' },
    { icon: '🎶', title: 'Nightlife', desc: 'Clubs, beach parties and live music.' },
    { icon: '🏄', title: 'Water Sports', desc: 'Surfing, jet-skiing, and snorkeling nearby.' }
  ];

  nearby = [
    { name: 'Baga Beach', img: 'assets/images/baga-beach.webp', desc: 'Busy beach with dining and nightlife.' },
    { name: 'Chapora Fort', img: 'assets/images/chapora-fort.webp', desc: 'Scenic fort with panoramic views.' },
    { name: 'Mapusa Market', img: 'assets/images/mapusa-market.webp', desc: 'Traditional market for spices and produce.' }
  ];
}