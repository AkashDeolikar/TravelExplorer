import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agartala',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agartala.html',
  styleUrls: ['../city-style.css']
})
export class AgartalaComponent {
  city = {
    name: 'Agartala',
    state: 'Tripura',
    heroImage:
      'https://s7ap1.scene7.com/is/image/incredibleindia/rudrasagar-lake-melaghar-2-attr-hero?qlt=82',
    tagline: 'Where Royal Heritage Meets Lakeside Serenity',
    description: `
      <strong>Agartala</strong>, the charming capital of <em>Tripura</em>, lies along the banks of the Haora River and 
      tells stories of kings, lakes, and timeless architecture. Once ruled by the <em>Manikya dynasty</em>, the city 
      harmoniously blends royal heritage with natural tranquility. From majestic palaces and sacred temples to 
      wildlife sanctuaries, Agartala offers an immersive journey through Tripura’s soul.
    `,
    highlights: [
      'Founded by Maharaja Krishna Kishore Manikya in 1849',
      'Cultural center of Tripura with vibrant tribal influences',
      'Gateway to scenic lakes, tea gardens, and bamboo crafts',
      'Renowned for its hospitality and slow-paced charm'
    ],
    attractions: [
      {
        name: 'Ujjayanta Palace',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/ujjayanta-palace-agartala-tripura-3-attr-hero?qlt=82',
        desc: `Built in 1901 by Maharaja Radha Kishore Manikya, this marble palace with domes, courtyards, and
                grand halls now serves as the <strong>Tripura State Museum</strong>. It offers a stunning look into
                the royal era through art, culture, and heritage galleries.`,
        link: 'https://en.wikipedia.org/wiki/Ujjayanta_Palace'
      },
      {
        name: 'Neermahal Palace',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/neer-mahal-agartala-tripura-1-attr-hero?qlt=82',
        desc: `An architectural wonder built in the middle of <em>Rudrasagar Lake</em>. This “<strong>Lake Palace of the East</strong>”
                blends Hindu and Mughal influences, reflecting the grandeur of Tripura’s royal summers.`,
        link: 'https://en.wikipedia.org/wiki/Neermahal'
      },
      {
        name: 'Tripura Sundari Temple',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/tripura-sundari-temple-agartala-tripura-2-attr-hero?qlt=82',
        desc: `One of India’s 51 <strong>Shakti Peethas</strong>, this 500-year-old temple dedicated to Goddess Kali sits atop a small hillock
                in Udaipur. The red-hued shrine and Kalyan Sagar lake create a serene spiritual ambience.`,
        link: 'https://en.wikipedia.org/wiki/Tripura_Sundari_Temple'
      },
      {
        name: 'Sepahijala Wildlife Sanctuary',
        image: 'https://tripuratourism.gov.in/images/tour/1661767990/176.jpg',
        desc: `Spread over 18 sq km, this sanctuary is a biodiversity haven featuring <strong>clouded leopards</strong>, spectacled langurs,
                and more than 150 bird species. The lake and botanical gardens make it a family favorite.`,
        link: 'https://en.wikipedia.org/wiki/Sepahijala_Wildlife_Sanctuary'
      },
      {
        name: 'Heritage Park',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/heritage-park-agartala-tripura-1-attr-hero?qlt=82&ts=1726651136773',
        desc: `A beautifully landscaped green space displaying miniature replicas of Tripura’s famous temples and palaces,
                offering a visual journey through the state’s cultural legacy.`,
        link: 'https://www.incredibleindia.gov.in/en/tripura/agartala'
      }
    ]
  };
}
