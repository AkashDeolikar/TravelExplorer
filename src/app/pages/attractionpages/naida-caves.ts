import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-naida-caves',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class NaidaCavesComponent {
  title = 'Naida Caves';
  location = 'Khandala, Maharashtra';
  heroImage = 'https://images.unsplash.com/photo-1659126574791-13313aa424bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332';

  overview = `
  The Naida Caves are a popular set of natural caverns carved into the rock face at Khandala,
  offering dramatic views, small waterfalls during monsoon, and adventurous climbs.
  `;

  history = `
  These caves are natural formations that have long attracted locals and visitors for short treks
  and panoramic views of the Western Ghats and the Deccan plateau.
  `;

  weatherSummary = { condition: 'Monsoon-friendly, cool winters', bestTime: 'October – March' };

  monthlyWeather = [
    { month: 'Jan', min: 12, max: 28 }, { month: 'Feb', min: 13, max: 29 },
    { month: 'Mar', min: 15, max: 31 }, { month: 'Apr', min: 18, max: 34 },
    { month: 'May', min: 21, max: 35 }, { month: 'Jun', min: 22, max: 30 },
    { month: 'Jul', min: 21, max: 28 }, { month: 'Aug', min: 21, max: 28 },
    { month: 'Sep', min: 20, max: 29 }, { month: 'Oct', min: 18, max: 30 },
    { month: 'Nov', min: 15, max: 30 }, { month: 'Dec', min: 13, max: 28 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Pune Airport (75 km) or Mumbai Airport (110 km).',
    rail: 'Khandala Railway Station (5 km).',
    road: 'Accessible via Lonavala–Khandala ghat on Mumbai–Pune route.'
  };

  highlights = [
    { icon: '🕳️', title: 'Rock Caves', desc: 'Natural caverns great for short treks.' },
    { icon: '🌧️', title: 'Monsoon Views', desc: 'Waterfall-fed streams and lush greenery.' },
    { icon: '📷', title: 'Panoramic Vistas', desc: 'Overlooks the Bhushi Dam valley.' },
    { icon: '🚶', title: 'Easy Hikes', desc: 'Short treks suitable for families.' }
  ];

  nearby = [
    { name: 'Lonavala', img: 'assets/images/lonavala.webp', desc: 'Hill-station attractions and chikki shops.' },
    { name: 'Bhushi Dam', img: 'assets/images/bhushi-dam.webp', desc: 'Popular during monsoon for water flow.' },
    { name: 'Tiger’s Leap', img: 'assets/images/tigers-leap.webp', desc: 'Dramatic cliff-edge viewpoint.' }
  ];
}