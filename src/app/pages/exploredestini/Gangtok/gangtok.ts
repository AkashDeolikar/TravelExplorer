import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gangtok',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gangtok.html',
  styleUrls: ['../city-style.css']
})
export class GangtokComponent {
  city = {
    name: 'Gangtok',
    state: 'Sikkim',
    heroImage: 'https://images.unsplash.com/photo-1569734147512-2caa1ea7d8df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=685',
    tagline: 'The Serene Gateway to the Himalayas',
    description: `
      <strong>Gangtok</strong> — perched on the eastern Himalayas — offers breathtaking views of Kanchenjunga, 
      peaceful monasteries, and crisp mountain air. A perfect blend of spirituality and adventure.
    `,
    attractions: [
      {
        name: 'Rumtek Monastery',
        desc: 'A magnificent Buddhist monastery and spiritual center of Karma Kagyu lineage.',
        image: 'https://www.karmapa.org/wp-content/uploads/Rumtek_Monastery_-_Inside_Close_View-1400px-cropped.jpg',
        link: 'https://en.wikipedia.org/wiki/Rumtek_Monastery'
      },
      {
        name: 'Tsomgo Lake',
        desc: 'A glacial lake surrounded by snow peaks, changing hues with the seasons.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/3c/e0/a5/caption.jpg?w=800&h=800&s=1',
        link: 'https://en.wikipedia.org/wiki/Tsomgo_Lake'
      },
      {
        name: 'MG Marg',
        desc: 'A pedestrian-only boulevard lined with cafés and handicraft stores.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/6d/8f/92/img-20201203-165738-largejpg.jpg?w=1200&h=-1&s=1',
        link: 'https://en.wikipedia.org/wiki/Gangtok'
      }
    ],
    travelTips: [
      '🗓️ Best time: March to June or September to November.',
      '🌄 Carry warm clothes; weather changes quickly.',
      '🎢 Ropeway rides offer stunning valley views.',
      '☕ Try local Sikkimese tea and momos.'
    ]
  };
}
