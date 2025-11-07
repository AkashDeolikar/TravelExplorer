import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chandigarh',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chandigarh.html',
  styleUrls: ['../city-style.css']
})
export class ChandigarhComponent {
  city = {
    name: 'Chandigarh',
    state: 'Union Territory',
    heroImage: 'https://s7ap1.scene7.com/is/image/incredibleindia/hand-monument-chandigarh-chandigarh-city-1-hero?qlt=82&ts=1742191375739',
    tagline: 'The city beautiful — where art meets architecture.',
    description: `
      Designed by the visionary Le Corbusier, <strong>Chandigarh</strong> is India’s most elegant union of geometry, 
      greenery, and grace. Wide boulevards, tranquil lakes, and artistic marvels define this city’s unique rhythm.
      <br><br>
      It’s a city that celebrates life in order — where gardens bloom, walls narrate stories, and culture thrives.
    `,
    attractions: [
      {
        name: 'Rock Garden',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/rock-garden-chandigarh-2-attr-hero?qlt=82',
        desc: 'A sculptural wonder made from recycled materials — a testament to creativity and sustainability.',
        link: 'https://en.wikipedia.org/wiki/Rock_Garden_of_Chandigarh'
      },
      {
        name: 'Sukhna Lake',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/sukhna-lake-chandigarh-chandigarh-2-attr-hero?qlt=82&ts=1742194189957',
        desc: 'A serene reservoir perfect for evening walks, boating, and sunset reflections.',
        link: 'https://en.wikipedia.org/wiki/Sukhna_Lake'
      },
      {
        name: 'Rose Garden',
        image: 'https://images.squarespace-cdn.com/content/v1/62015f66f840ef671da14ae7/1656648787086-I6CVPJ22OSNPX40FMJVZ/Rose+Garden+Italy.JPG',
        desc: 'Asia’s largest rose garden — home to over 1,600 varieties of roses and lush lawns.',
        link: 'https://en.wikipedia.org/wiki/Zakir_Hussain_Rose_Garden'
      },
      {
        name: 'Capitol Complex',
        image: 'https://static.dezeen.com/uploads/2016/08/capitol-complex-le-corbusier-chandigarh-india-benjamin-hosking_dezeen_1568_1.jpg',
        desc: 'A UNESCO World Heritage Site — the architectural heart of the city.',
        link: 'https://en.wikipedia.org/wiki/Capitol_Complex,_Chandigarh'
      }
    ],
    travelTips: [
      '🗓️ Best time: October–March (comfortable and scenic).',
      '🚲 Rent a bicycle to explore Sector 10 and the lakefront.',
      '🌳 Visit early morning for garden photography.',
      '🥗 Must-try: Chole Bhature, Lassi, and street chaats in Sector 17.',
      '🧭 The city is designed on a grid — easy to navigate and explore.'
    ]
  };
}
