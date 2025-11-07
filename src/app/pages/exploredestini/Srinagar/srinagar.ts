import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-srinagar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './srinagar.html',
  styleUrls: ['../city-style.css']
})
export class SrinagarComponent {
  city = {
    name: 'Srinagar',
    state: 'Jammu & Kashmir',
    heroImage: 'https://images.unsplash.com/photo-1614591276564-7b3e69347a48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174',
    tagline: 'Paradise on Earth — where nature paints poetry on every ripple.',
    description: `
      Nestled in the heart of the Kashmir Valley, <strong>Srinagar</strong> is a dream woven in snow-capped peaks, 
      mirrored lakes, and Mughal gardens. The <em>Dal Lake</em> glimmers like glass under a soft mist, 
      while shikaras glide gracefully through floating gardens.
      <br><br>
      Known as the <strong>Venice of the East</strong>, Srinagar blends romantic landscapes with timeless charm — 
      from wooden houseboats to saffron fields that glow at sunrise.
    `,
    attractions: [
      {
        name: 'Dal Lake',
        image: 'https://images.unsplash.com/photo-1564329494258-3f72215ba175?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        desc: 'A shimmering mirror of the Himalayas — perfect for shikara rides and sunrise reflections.',
        link: 'https://en.wikipedia.org/wiki/Dal_Lake'
      },
      {
        name: 'Mughal Gardens',
        image: 'https://plus.unsplash.com/premium_photo-1661938135446-9aae7262fed5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        desc: 'A chain of terraced gardens — Nishat, Shalimar, and Chashme Shahi — crafted in classic Persian style.',
        link: 'https://en.wikipedia.org/wiki/Shalimar_Bagh,_Srinagar'
      },
      {
        name: 'Shankaracharya Temple',
        image: 'https://plus.unsplash.com/premium_photo-1691031429084-894ffad104ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
        desc: 'Perched atop a hill, offering a panoramic view of Srinagar and its sapphire waters.',
        link: 'https://en.wikipedia.org/wiki/Shankaracharya_Temple,_Srinagar'
      },
      {
        name: 'Hazratbal Shrine',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/hazratbal-mosque-srinagar-jammu--kashmir-5-musthead-hero?qlt=82&ts=1726728866101',
        desc: 'A revered mosque by the lake, where faith and tranquility meet in silken harmony.',
        link: 'https://en.wikipedia.org/wiki/Hazratbal_Shrine'
      }
    ],
    travelTips: [
      '🗓️ Best time: April–October (blooming gardens and pleasant weather).',
      '🚤 Experience a night stay in a traditional houseboat.',
      '🧣 Warm clothing is essential — nights can get chilly even in summer.',
      '🍛 Must-try: Rogan Josh, Gushtaba, and Kahwa (traditional saffron tea).',
      '📸 Don’t miss photographing the reflection of the Zabarwan Range at sunrise.'
    ]
  };
}
