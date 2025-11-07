import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-amritsar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './amritsar.html',
  styleUrls: ['../city-style.css']
})
export class AmritsarComponent {
  city = {
    name: 'Amritsar',
    state: 'Punjab',
    heroImage:
      'https://plus.unsplash.com/premium_photo-1697730324062-c012bc98eb13?auto=format&fit=crop&q=80&w=1170',
    tagline: 'Where faith shines in gold and history echoes through time.',
    description: `
      <strong>Amritsar</strong> — the cultural and spiritual heart of Punjab — radiates warmth, faith, and resilience. 
      Founded in 1577 by <em>Guru Ram Das</em>, the fourth Sikh Guru, the city is home to the majestic 
      <strong>Golden Temple (Harmandir Sahib)</strong>, a sacred sanctuary of peace and equality.  
      From the soulful hymns that echo across the shimmering sarovar to the humble langar serving millions every year,  
      Amritsar embodies humanity and devotion in its purest form.  
      Beyond its spiritual core, the city tells powerful stories of India’s freedom, colonial struggles, and Punjabi pride.
    `,
    attractions: [
      {
        name: 'Golden Temple (Harmandir Sahib)',
        image: 'https://images.unsplash.com/photo-1661976940067-e1d197bce8aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
        desc: 'The holiest shrine of Sikhism, surrounded by the Amrit Sarovar — a symbol of serenity and equality.',
        link: 'https://en.wikipedia.org/wiki/Golden_Temple'
      },
      {
        name: 'Jallianwala Bagh',
        image: 'https://plus.unsplash.com/premium_photo-1697729441943-f1bffee0b432?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        desc: 'A poignant memorial to India’s freedom struggle, where hundreds were martyred in 1919.',
        link: 'https://en.wikipedia.org/wiki/Jallianwala_Bagh_massacre'
      },
      {
        name: 'Wagah Border Ceremony',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/attari-wagah-border-amritsar-punjab-4-musthead-hero?qlt=82&ts=1726662183285',
        desc: 'A spectacular daily retreat ceremony on the India-Pakistan border — a symbol of unity and pride.',
        link: 'https://en.wikipedia.org/wiki/Wagah_border_ceremony'
      },
      {
        name: 'Partition Museum',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/3-partition-museum-amritsar-punjab-attr-hero?qlt=82&ts=1726661909120',
        desc: 'A moving museum documenting the 1947 Partition — stories of resilience and shared humanity.',
        link: 'https://www.partitionmuseum.org/'
      },
      {
        name: 'Gobindgarh Fort',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/gobindgarh-fort-amritsar-2-attr-hero?qlt=82&ts=1726661813254',
        desc: 'A 250-year-old fort turned cultural museum — echoing the valor of Maharaja Ranjit Singh’s empire.',
        link: 'https://en.wikipedia.org/wiki/Gobindgarh_Fort'
      }
    ],
    travelTips: [
      '🗓️ Best time to visit: November to March (pleasant weather, festive season).',
      '🚄 Connectivity: Amritsar Junction is well connected to Delhi, Chandigarh, and Jammu.',
      '✈️ Nearest airport: Sri Guru Ram Dass Jee International Airport (11 km from city center).',
      '🍛 Must-try dishes: Amritsari Kulcha, Lassi, Sarson da Saag with Makki di Roti, and Karah Prasad.',
      '🕌 Dress modestly when visiting the Golden Temple; cover your head inside the complex.'
    ]
  };
}
