import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-victoria-memorial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class VictoriaMemorialComponent {
  title = 'Victoria Memorial';
  location = 'Kolkata, West Bengal';
  heroImage = 'Victoria Memorial';

  overview = `
  A majestic white-marble museum and park built in memory of Queen Victoria,
  the Victoria Memorial blends British and Mughal architectural elements and houses an extensive collection of art and artifacts.
  `;

  history = `
  Constructed between 1906 and 1921, the memorial commemorates the British era and now serves as a museum and cultural center,
  attracting visitors to its galleries, landscaped gardens, and evening light shows.
  `;

  weatherSummary = { condition: 'Humid subtropical', bestTime: 'October – March' };

  monthlyWeather = [
    { month: 'Jan', min: 12, max: 26 }, { month: 'Feb', min: 15, max: 28 },
    { month: 'Mar', min: 20, max: 33 }, { month: 'Apr', min: 24, max: 36 },
    { month: 'May', min: 26, max: 37 }, { month: 'Jun', min: 26, max: 34 },
    { month: 'Jul', min: 25, max: 31 }, { month: 'Aug', min: 25, max: 31 },
    { month: 'Sep', min: 24, max: 32 }, { month: 'Oct', min: 22, max: 32 },
    { month: 'Nov', min: 18, max: 30 }, { month: 'Dec', min: 13, max: 27 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Netaji Subhas Chandra Bose International Airport (20 km).',
    rail: 'Kolkata (Howrah) Station and Sealdah Station serve the city.',
    road: 'Well-connected via EM Bypass and major arterial roads.'
  };

  highlights = [
    { icon: '🏛️', title: 'Museum Galleries', desc: 'Paintings, sculptures, and colonial memorabilia.' },
    { icon: '🌳', title: 'Lush Grounds', desc: 'Extensive lawns and botanical displays.' },
    { icon: '🌇', title: 'Evening Illumination', desc: 'Beautifully lit façade at dusk.' },
    { icon: '💰', title: 'Entry Fee', desc: 'Moderate (varies for special exhibits).' }
  ];

  nearby = [
    { name: 'Kolkata Museum', img: 'assets/images/kolkata-museum.webp', desc: 'Regional history and art collections.' },
    { name: 'St. Paul’s Cathedral', img: 'assets/images/st-pauls-cathedral.webp', desc: 'Anglican cathedral with neo-Gothic architecture.' },
    { name: 'Maidan', img: 'assets/images/maidan.webp', desc: 'Large urban park for leisure and events.' }
  ];
}