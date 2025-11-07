import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shore-temple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class ShoreTempleComponent {
  title = 'Shore Temple';
  location = 'Mahabalipuram, Tamil Nadu';
  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/1---shore-temple---mamallapuram-tamil-nadu-attr-hero?qlt=82&ts=1726654568818';

  overview = `
  The Shore Temple is an exquisite 8th-century rock-cut Temple complex on the coast of Mahabalipuram,
  famed for its sculptural quality, sea views, and UNESCO recognition.
  `;

  history = `
  Built under the Pallava dynasty, the temple showcases early Dravidian architecture and maritime temple design that has endured coastal weathering.
  `;

  weatherSummary = { condition: 'Tropical coastal', bestTime: 'October – March' };

  monthlyWeather = [
    { month: 'Jan', min: 20, max: 30 }, { month: 'Feb', min: 21, max: 31 },
    { month: 'Mar', min: 24, max: 33 }, { month: 'Apr', min: 26, max: 35 },
    { month: 'May', min: 27, max: 36 }, { month: 'Jun', min: 26, max: 35 },
    { month: 'Jul', min: 25, max: 33 }, { month: 'Aug', min: 25, max: 32 },
    { month: 'Sep', min: 25, max: 32 }, { month: 'Oct', min: 24, max: 32 },
    { month: 'Nov', min: 23, max: 31 }, { month: 'Dec', min: 21, max: 30 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Chennai International Airport (60 km).',
    rail: 'Chennai Egmore and local stations serve Mahabalipuram via road links.',
    road: 'Accessible via East Coast Road (ECR) from Chennai.'
  };

  highlights = [
    { icon: '🌊', title: 'Sea-Facing Temple', desc: 'Iconic temple complex by the Bay of Bengal.' },
    { icon: '🗿', title: 'Sculptural Detail', desc: 'Fine rock-cut carvings and reliefs.' },
    { icon: '🏖️', title: 'Rock Shoreline', desc: 'Scenic coastline and beach access.' },
    { icon: '🏛️', title: 'UNESCO Site', desc: 'Part of the Group of Monuments at Mahabalipuram.' }
  ];

  nearby = [
    { name: 'Arjuna’s Penance', img: 'assets/images/arjunas-penance.webp', desc: 'Massive open-air bas-relief.' },
    { name: 'Five Rathas', img: 'assets/images/five-rathas.webp', desc: 'Monolithic chariot temples.' },
    { name: 'Mahabalipuram Beach', img: 'assets/images/mahabalipuram-beach.webp', desc: 'Calm waters and local eateries.' }
  ];
}