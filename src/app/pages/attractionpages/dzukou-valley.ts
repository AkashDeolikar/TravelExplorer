import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dzukou-valley',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class DzukouValleyComponent {
  title = 'Dzukou Valley';
  location = 'Nagaland / Manipur border';
  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/dzukou-valley-kohima-nagaland-attr-hero-1?qlt=82&ts=1727012411648';

  overview = `
  Dzukou Valley is famed for its rolling emerald meadows, seasonal blooms (including the rare Dzukou lily), and trekking trails.
  It offers an offbeat alpine-like experience in Northeast India.
  `;

  history = `
  Revered by local communities, the valley became popular among trekkers for its unspoiled beauty and quiet, high-altitude meadows.
  Conservation efforts protect its fragile flora and fauna.
  `;

  weatherSummary = { condition: 'Cool and misty', bestTime: 'November – April' };

  monthlyWeather = [
    { month: 'Jan', min: 2, max: 12 }, { month: 'Feb', min: 3, max: 14 },
    { month: 'Mar', min: 5, max: 18 }, { month: 'Apr', min: 8, max: 22 },
    { month: 'May', min: 12, max: 24 }, { month: 'Jun', min: 15, max: 22 },
    { month: 'Jul', min: 14, max: 20 }, { month: 'Aug', min: 14, max: 20 },
    { month: 'Sep', min: 13, max: 20 }, { month: 'Oct', min: 8, max: 18 },
    { month: 'Nov', min: 4, max: 16 }, { month: 'Dec', min: 2, max: 12 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Dimapur Airport or Imphal Airport, then road to trailheads.',
    rail: 'Dimapur Railway Station (for Nagaland access).',
    road: 'Trek access from Kohima or Imphal via local roads and trailheads.'
  };

  highlights = [
    { icon: '🥾', title: 'Trekking', desc: 'Moderate trails suitable for overnight treks.' },
    { icon: '🌼', title: 'Seasonal Flowers', desc: 'Valley blooms spectacularly in certain months.' },
    { icon: '🏕️', title: 'Camping', desc: 'Popular for starry-night camps and quiet retreats.' },
    { icon: '🌫️', title: 'Misty Mornings', desc: 'Atmospheric fog and dramatic vistas.' }
  ];

  nearby = [
    { name: 'Kohima', img: 'assets/images/kohima.webp', desc: 'Capital city with cultural markets.' },
    { name: 'Imphal', img: 'assets/images/imphal.webp', desc: 'Gateway to Manipur and nearby attractions.' },
    { name: 'Nature Trails', img: 'assets/images/nature-trail.webp', desc: 'Local guided treks and village visits.' }
  ];
}