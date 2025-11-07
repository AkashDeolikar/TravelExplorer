import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rock-garden',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class RockGardenComponent {
  title = 'Rock Garden of Chandigarh';
  location = 'Chandigarh, India';
  heroImage = 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQMRnDfTVfGWwBSvR9NRDMBdD3Fc_Jt2haGtjWlYxPm_hpya_xRjgqSxxEkFoQHZFBVf6bEO0Sq1F_ddHJ-08tcflc&s=19';

  overview = `
  The Rock Garden is a creative marvel made entirely from industrial and home waste.
  Designed by Nek Chand, it’s a surreal space filled with sculptures, waterfalls, and pathways.
  `;

  history = `
  Conceived secretly in 1957 by government official Nek Chand, the Rock Garden
  transformed discarded materials into an artistic wonder, now spanning over 40 acres.
  `;

  weatherSummary = { condition: 'Warm summers, pleasant winters', bestTime: 'October – March' };

  monthlyWeather = [
    { month: 'Jan', min: 7, max: 20 }, { month: 'Feb', min: 9, max: 23 },
    { month: 'Mar', min: 14, max: 28 }, { month: 'Apr', min: 19, max: 35 },
    { month: 'May', min: 23, max: 38 }, { month: 'Jun', min: 26, max: 39 },
    { month: 'Jul', min: 26, max: 34 }, { month: 'Aug', min: 25, max: 33 },
    { month: 'Sep', min: 23, max: 33 }, { month: 'Oct', min: 18, max: 31 },
    { month: 'Nov', min: 12, max: 26 }, { month: 'Dec', min: 8, max: 21 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Chandigarh International Airport (12 km).',
    rail: 'Chandigarh Railway Station (8 km).',
    road: 'NH5 connects Chandigarh with Delhi and Shimla.'
  };

  highlights = [
    { icon: '🎨', title: 'Art from Waste', desc: 'Over 2,000 sculptures made from scrap materials.' },
    { icon: '💧', title: 'Water Features', desc: 'Cascading waterfalls add a natural charm.' },
    { icon: '🏞️', title: 'Creative Spaces', desc: 'Open-air galleries connected by arches and tunnels.' },
    { icon: '🕰️', title: 'Visiting Hours', desc: '9:00 AM – 6:00 PM' }
  ];

  nearby = [
    { name: 'Sukhna Lake', img: 'assets/images/sukhna-lake.webp', desc: 'Serene lake for boating and morning walks.' },
    { name: 'Rose Garden', img: 'assets/images/rose-garden.webp', desc: 'Asia’s largest rose garden with 1,600 varieties.' },
    { name: 'Capitol Complex', img: 'assets/images/capitol-complex.webp', desc: 'UNESCO World Heritage modernist complex by Le Corbusier.' }
  ];
}