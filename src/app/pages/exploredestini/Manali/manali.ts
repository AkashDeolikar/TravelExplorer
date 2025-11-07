import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manali',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manali.html',
  styleUrls: ['../city-style.css']
})
export class ManaliComponent {
  city = {
    name: 'Manali',
    state: 'Himachal Pradesh',
    heroImage: 'https://www.tripstorz.com/_astro/houses-surrounded-by-green-trees-in-manali-during-daytime.DAktkgeM_90jep.jpg',
    tagline: 'Adventure in the air, tranquility in every breath.',
    description: `
      Cradled in the Beas River Valley, <strong>Manali</strong> is where nature, adventure, and peace converge.
      Snow-draped peaks, alpine meadows, and apple orchards create a postcard that never fades.
      <br><br>
      From paragliding over Solang Valley to spiritual sojourns in Hadimba Temple — Manali offers 
      serenity for the soul and adrenaline for the heart.
    `,
    attractions: [
      {
        name: 'Solang Valley',
        image: 'https://images.unsplash.com/photo-1675515642342-2c55067d51d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735',
        desc: 'A paradise for thrill-seekers — skiing, paragliding, zorbing, and snow adventures.',
        link: 'https://en.wikipedia.org/wiki/Solang_Valley'
      },
      {
        name: 'Hadimba Temple',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/hidimba-temple-manali-himachal-pradesh-5-musthead-hero?qlt=82&ts=1726730757462',
        desc: 'A 16th-century wooden shrine surrounded by towering deodar trees — calm and mystical.',
        link: 'https://en.wikipedia.org/wiki/Hidimba_Devi_Temple'
      },
      {
        name: 'Rohtang Pass',
        image: 'https://jannattravelguru.com/wp-content/uploads/2023/03/Rohtang-pass.jpg',
        desc: 'Gateway to Lahaul and Spiti — offering snow adventures and breathtaking mountain views.',
        link: 'https://en.wikipedia.org/wiki/Rohtang_Pass'
      },
      {
        name: 'Old Manali',
        image: 'https://www.holidify.com/images/cmsuploads/compressed/4708_20190501151400.jpg',
        desc: 'Rustic charm, cozy cafes, and mountain music — perfect for slow travel and mindfulness.',
        link: '#'
      }
    ],
    travelTips: [
      '🗓️ Best time: October–June (for both snow and greenery).',
      '🧥 Carry layers — weather changes swiftly in the hills.',
      '🏍️ Ideal for bikers heading toward Leh-Ladakh.',
      '🍎 Try local apple wine and trout fish curry.',
      '🌲 Avoid littering — help preserve Himachal’s pristine beauty.'
    ]
  };
}
