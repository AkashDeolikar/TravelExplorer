import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kangla-fort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class KanglaFortComponent {
  title = 'Kangla Fort';
  location = 'Imphal, Manipur';
  heroImage = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd-1SR70fnpyB1HAurZufepHXm_k2KjLnULGo02lkAop5FmodjfuBk1e4-kR7qDC65aFrVPYR7c5F0Ks7FsaKmZON2nApJnWN7l9QbZhD4Y-uullJo3OFYCtsxZYnZ3A6o6nqrZEUW7zrCjW-JDmx0I2y-oYhGcDlJ9NYUo0z53VLH6qqgZLZj0IQcSDY/s1600/5fbc42a6-014c-43af-89e4-64ec9e5a8d75.jpg';

  overview = `
  Kangla Fort is the ancient seat of Manipur’s kings and a symbol of the state’s cultural heritage.
  It contains palaces, temples, and archaeological remains along the Imphal River.
  `;

  history = `
  Once the royal compound of the Meitei rulers, Kangla has historic structures, sacred sites, and deep ties to local identity.
  Restoration projects and public access have opened the fort for visitors and cultural events.
  `;

  weatherSummary = { condition: 'Subtropical highland', bestTime: 'October – March' };

  monthlyWeather = [
    { month: 'Jan', min: 7, max: 20 }, { month: 'Feb', min: 9, max: 23 },
    { month: 'Mar', min: 13, max: 26 }, { month: 'Apr', min: 16, max: 28 },
    { month: 'May', min: 19, max: 30 }, { month: 'Jun', min: 20, max: 29 },
    { month: 'Jul', min: 20, max: 28 }, { month: 'Aug', min: 20, max: 28 },
    { month: 'Sep', min: 19, max: 28 }, { month: 'Oct', min: 16, max: 27 },
    { month: 'Nov', min: 12, max: 25 }, { month: 'Dec', min: 8, max: 22 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Imphal International Airport (10 km).',
    rail: 'No direct rail — nearest major station is Dimapur (160 km).',
    road: 'Well-connected by NH37 and local roads within Imphal.'
  };

  highlights = [
    { icon: '🏯', title: 'Royal Heritage', desc: 'Remains of palaces, temples, and public structures.' },
    { icon: '🎎', title: 'Cultural Events', desc: 'Local festivals and traditional performances.' },
    { icon: '🏺', title: 'Archaeology', desc: 'Excavated relics and historical displays.' },
    { icon: '🚶', title: 'Guided Tours', desc: 'Walks around the fort explain its history and customs.' }
  ];

  nearby = [
    { name: 'Imphal War Cemetery', img: 'assets/images/imphal-war-cemetery.webp', desc: 'World War II cemetery nearby.' },
    { name: 'Loktak Lake', img: 'assets/images/loktak-lake.webp', desc: 'Largest freshwater lake in Northeast India.' },
    { name: 'Handloom Markets', img: 'assets/images/handloom-market.webp', desc: 'Local weaving and craft shopping.' }
  ];
}