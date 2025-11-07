import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-haridwar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './haridwar.html',
  styleUrls: ['../city-style.css']
})
export class HaridwarComponent {
  city = {
    name: 'Haridwar',
    state: 'Uttarakhand',
    heroImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPWVj88zE9iW4wj1BOUL6RxwwMVUdGVUanw&s',
    tagline: 'The Gateway to the Gods',
    description: `
      <strong>Haridwar</strong> stands as one of India’s seven holiest cities. Nestled along the Ganges,
      it’s where spirituality meets serenity — with sacred ghats, ancient temples, and evening aartis.
    `,
    attractions: [
      {
        name: 'Har Ki Pauri',
        desc: 'The most revered ghat in Haridwar where pilgrims gather for the Ganga Aarti.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJb9lgzjseKU4weGRN8iJHn9lhqDONdhGh9g&s',
        link: 'https://www.incredibleindia.gov.in/en/uttarakhand/haridwar/har-ki-pauri'
      },
      {
        name: 'Mansa Devi Temple',
        desc: 'Situated atop Bilwa Parvat, the temple grants devotees’ heartfelt wishes.',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/mansa-devi-temple-haridwar-1-attr-hero?qlt=82&ts=1726674354668',
        link: 'https://www.incredibleindia.gov.in/en/uttarakhand/haridwar/mansa-devi-temple'
      },
      {
        name: 'Chandi Devi Temple',
        desc: 'A scenic cable car ride leads to this ancient temple dedicated to Goddess Chandi.',
        image: 'https://t.eucdn.in/tourism/lg-jpg/chandi-devi-temple-2338297.jpg',
        link: 'https://www.incredibleindia.gov.in/en/uttarakhand/haridwar/chandi-devi-temple'
      }
    ],
    travelTips: [
      '🗓️ Best time: October to April.',
      '🕉️ Attend the evening Ganga Aarti at Har Ki Pauri.',
      '🚠 Ropeway rides offer scenic Himalayan views.',
      '🚱 Avoid bathing during monsoon due to high currents.'
    ]
  };
}
