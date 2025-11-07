import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mechuka',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mechuka.html',
  styleUrls: ['../city-style.css']
})
export class MechukaComponent {
  city = {
    name: 'Mechuka',
    state: 'Arunachal Pradesh',
    heroImage:
      'https://s7ap1.scene7.com/is/image/incredibleindia/1-samten-yongcha-monastery-mechuka-arunachal-pradesh-attr-hero?qlt=82&ts=1726743121180',
    tagline: 'The Hidden Himalayan Jewel of Arunachal Pradesh',
    description: `
      <strong>Mechuka</strong> — also known as <em>Menchukha</em> — is a serene Himalayan valley nestled 
      in the <strong>Shi-Yomi district</strong> of Arunachal Pradesh, close to the Indo-China border. 
      At an altitude of 6,000 feet, it’s surrounded by snow-capped mountains, alpine forests, and rivers 
      that glisten under the mountain sun. A place where nature and spirituality coexist, Mechuka is home 
      to the <em>ancient Samten Yongcha Monastery</em> and warm <strong>Memba tribes</strong> known for their 
      hospitality and traditional wooden homes.
    `,
    highlights: [
      'Altitude: ~6,000 ft above sea level',
      'Home to the Memba, Ramo, and Bokar tribes',
      'Renowned for Samten Yongcha Monastery — over 400 years old',
      'A destination for trekkers, photographers, and culture lovers alike'
    ],
    attractions: [
      {
        name: 'Samten Yongcha Monastery',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/samten-yongcha-monastery-mechuka-arunachal-pradesh-2-musthead-hero?qlt=82&ts=1726742889141',
        desc: `Perched atop a hill overlooking the valley, this 400-year-old <strong>Gelugpa Buddhist monastery</strong> 
               predates even the Tawang Monastery. It houses ancient scriptures, artifacts, and a breathtaking view 
               of the Mechuka town below.`,
        link: 'https://en.wikipedia.org/wiki/Mechuka'
      },
      {
        name: 'Siyom River',
        image: 'https://www.topplacesindia.com/img/attractions/arunachal-pradesh/siyom-river/siyom-river-hero.jpg',
        desc: `The crystal-clear <strong>Siyom River</strong> flows gracefully through Mechuka, 
               ideal for picnics, riverside walks, and stunning reflections of surrounding peaks.`,
        link: 'https://en.wikipedia.org/wiki/Siyom_River'
      },
      {
        name: 'Dorjeeling Village',
        image: 'https://mechuka.net/wp-content/uploads/2024/09/Dorjeeling-Village.webp',
        desc: `A quaint traditional village known for its wooden houses, apple orchards, and prayer flags that 
               flutter in the cool mountain breeze — a living postcard of the eastern Himalayas.`,
        link: 'https://www.incredibleindia.gov.in/en/arunachal-pradesh/mechuka'
      },
      {
        name: 'Hanuman Face Rock',
        image: 'https://pbs.twimg.com/media/FW3lVd9UsAAgKAu.jpg:large',
        desc: `A natural rock formation resembling Lord Hanuman’s face, 
               revered by locals and pilgrims alike — a mystical wonder sculpted by nature.`,
        link: 'https://en.wikipedia.org/wiki/Mechuka'
      },
      {
        name: 'Mechuka Adventure Festival',
        image: 'https://asoulwindow.com/wp-content/uploads/2018/12/Hot-air-balloon-paragliding-Adventure-At-Mechuka-Arunachal-Pradesh-India.jpg',
        desc: `Held every November, this vibrant festival celebrates the spirit of Mechuka 
               with <strong>mountain biking, paragliding, river rafting</strong>, and tribal music — 
               blending adrenaline with cultural pride.`,
        link: 'https://www.arunachaltourism.com/'
      }
    ]
  };
}
