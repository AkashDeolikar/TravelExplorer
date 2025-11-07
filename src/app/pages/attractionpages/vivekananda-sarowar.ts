import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vivekananda-sarowar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class vivekanandComponent {
  title = 'Vivekananda Sarowar (Tank Bund)';
  location = 'Raipur, Chhattisgarh';
  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/swami-vivekananda-sarovar-raipur-chhattisgarh-attr-hero-1?qlt=82&ts=1727011215784';

  overview = `
  Also known as Budha Talab, Vivekananda Sarowar is a large, peaceful lake in the heart of Raipur,
  crowned by a majestic 37-feet tall statue of Swami Vivekananda — one of India’s tallest standing statues.
  It serves as a serene retreat amid the city bustle.
  `;

  history = `
  Originally known as Budha Talab, this lake was renamed Vivekananda Sarowar after the installation
  of the grand statue in 2012. It symbolizes peace, spirituality, and the teachings of Swami Vivekananda.
  `;

  weatherSummary = { condition: 'Warm and humid climate', bestTime: 'November – February' };

  monthlyWeather = [
    { month: 'Jan', min: 14, max: 28 }, { month: 'Feb', min: 16, max: 31 },
    { month: 'Mar', min: 20, max: 35 }, { month: 'Apr', min: 25, max: 40 },
    { month: 'May', min: 27, max: 42 }, { month: 'Jun', min: 26, max: 36 },
    { month: 'Jul', min: 24, max: 32 }, { month: 'Aug', min: 24, max: 32 },
    { month: 'Sep', min: 24, max: 33 }, { month: 'Oct', min: 22, max: 33 },
    { month: 'Nov', min: 18, max: 30 }, { month: 'Dec', min: 15, max: 28 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Swami Vivekananda Airport (15 km).',
    rail: 'Raipur Junction Railway Station (3 km).',
    road: 'Easily accessible via MG Road and Great Eastern Road.'
  };

  highlights = [
    { icon: '🕉️', title: 'Vivekananda Statue', desc: '37-ft tall statue overlooking the lake.' },
    { icon: '🌇', title: 'Evening Lights', desc: 'Beautifully illuminated after sunset.' },
    { icon: '🚤', title: 'Boating', desc: 'Leisure boating experience around the statue.' },
    { icon: '🌿', title: 'Peaceful Ambience', desc: 'Popular for walks and meditation.' }
  ];

  nearby = [
    { name: 'Mahant Ghasidas Museum', img: 'assets/images/ghasidas-museum.webp', desc: 'Exhibits tribal artifacts and history of Chhattisgarh.' },
    { name: 'Nandan Van Zoo', img: 'assets/images/nandan-van.webp', desc: 'Wildlife park with safari experiences.' },
    { name: 'Energy Park', img: 'assets/images/energy-park.webp', desc: 'Eco-park promoting renewable energy awareness.' }
  ];
}
