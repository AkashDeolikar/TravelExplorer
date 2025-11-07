import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kamakhya-temple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class KamakhyaTempleComponent {
  title = 'Kamakhya Temple';
  location = 'Guwahati, Assam';
  heroImage = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd-1SR70fnpyB1HAurZufepHXm_k2KjLnULGo02lkAop5FmodjfuBk1e4-kR7qDC65aFrVPYR7c5F0Ks7FsaKmZON2nApJnWN7l9QbZhD4Y-uullJo3OFYCtsxZYnZ3A6o6nqrZEUW7zrCjW-JDmx0I2y-oYhGcDlJ9NYUo0z53VLH6qqgZLZj0IQcSDY/s1600/5fbc42a6-014c-43af-89e4-64ec9e5a8d75.jpg';

  overview = `
  Kamakhya is one of India’s most revered Shakti peethas, set on Nilachal Hill and known for its unique tantric traditions and annual Ambubachi Mela.
  `;

  history = `
  The temple complex has ancient origins with later reconstructions. It is central to tantric practices and draws pilgrims throughout the year.
  `;

  weatherSummary = { condition: 'Humid subtropical', bestTime: 'October – April' };

  monthlyWeather = [
    { month: 'Jan', min: 10, max: 25 }, { month: 'Feb', min: 13, max: 27 },
    { month: 'Mar', min: 16, max: 30 }, { month: 'Apr', min: 18, max: 32 },
    { month: 'May', min: 21, max: 34 }, { month: 'Jun', min: 23, max: 32 },
    { month: 'Jul', min: 23, max: 30 }, { month: 'Aug', min: 23, max: 30 },
    { month: 'Sep', min: 22, max: 30 }, { month: 'Oct', min: 20, max: 31 },
    { month: 'Nov', min: 16, max: 29 }, { month: 'Dec', min: 12, max: 26 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Lokpriya Gopinath Bordoloi International Airport (Guwahati, 20 km).',
    rail: 'Guwahati Railway Station (12 km).',
    road: 'Well-connected via NH27 and local roads to Nilachal Hill.'
  };

  highlights = [
    { icon: '🔱', title: 'Shakti Peetha', desc: 'Important center for goddess worship.' },
    { icon: '🎪', title: 'Ambubachi Mela', desc: 'Annual fertility festival attracting many devotees.' },
    { icon: '🛕', title: 'Temple Complex', desc: 'Multiple shrines and tantric rites.' },
    { icon: '🌄', title: 'Hilltop Views', desc: 'Overlooks the city of Guwahati and Brahmaputra.' }
  ];

  nearby = [
    { name: 'Umananda Island', img: 'assets/images/umananda-island.webp', desc: 'Small river island shrine on the Brahmaputra.' },
    { name: 'Pobitora Wildlife Sanctuary', img: 'assets/images/pobitora.webp', desc: 'Famous for one-horned rhinoceros.' },
    { name: 'Guwahati City Markets', img: 'assets/images/guwahati-market.webp', desc: 'Local culture and craft shopping.' }
  ];
}