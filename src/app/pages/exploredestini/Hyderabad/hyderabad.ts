import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hyderabad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hyderabad.html',
  styleUrls: ['../city-style.css']
})
export class HyderabadComponent {
  city = {
    name: 'Hyderabad',
    state: 'Telangana',
    heroImage: 'https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar_hyderabad_telangana-1-city-hero?qlt=82&ts=1742190636845',
    tagline: 'The City of Pearls and Nizami Grandeur',
    description: `
      <strong>Hyderabad</strong> — where heritage and hi-tech coexist. The Nizams' capital is a blend of 
      majestic architecture, aromatic biryani, and bustling bazaars. From Charminar to Cyberabad, it’s a city 
      that preserves history while embracing the future.
    `,
    attractions: [
      {
        name: 'Charminar',
        desc: 'The heart of Hyderabad, this 16th-century monument is an Indo-Islamic masterpiece.',
        image: 'https://indiainfrahub.com/wp-content/uploads/2020/08/Charminar.jpg',
        link: 'https://en.wikipedia.org/wiki/Charminar'
      },
      {
        name: 'Golconda Fort',
        desc: 'An ancient citadel known for its acoustics, grandeur, and light shows.',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/golconda-fort-hyderabad-secunderabad-telangana-3-musthead-hero?qlt=82&ts=1742197014098',
        link: 'https://en.wikipedia.org/wiki/Golconda_Fort'
      },
      {
        name: 'Hussain Sagar Lake',
        desc: 'A heart-shaped lake featuring the iconic Buddha statue at its center.',
        image: 'https://hblimg.mmtcdn.com/content/hubble/img/hyderabad/mmt/activities/m_activities_hyderabad_hussain_sagar_lake_l_486_729.jpg',
        link: 'https://en.wikipedia.org/wiki/Hussain_Sagar'
      }
    ],
    travelTips: [
      '🗓️ Best time: October to February.',
      '🍛 Must-try: Hyderabadi Biryani and Irani Chai.',
      '🕌 Visit Charminar early morning for fewer crowds.',
      '🛍️ Shop pearls and lac bangles at Laad Bazaar.'
    ]
  };
}
