import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delhi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delhi.html',
  styleUrls: ['../city-style.css']
})
export class DelhiComponent {
  city = {
    name: 'Delhi',
    state: 'National Capital Territory of India',
    heroImage: 'https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    tagline: 'Where heritage whispers through modern skylines.',
    description: `
      <strong>Delhi</strong> — India’s vibrant capital — stands as a living chronicle of history and modernity. 
      From the majestic Mughal forts and Mughlai aromas wafting through <em>Chandni Chowk</em>, 
      to the colonial architecture of <em>Rajpath</em> and the cosmopolitan pulse of <em>Connaught Place</em>, 
      Delhi seamlessly blends its royal past with its progressive spirit.
      <br><br>
      Explore the contrasts — <strong>Old Delhi</strong>’s narrow lanes, sacred mosques, and bustling bazaars 
      against <strong>New Delhi</strong>’s tree-lined avenues, government edifices, and leafy parks.
    `,
    attractions: [
      {
        name: 'Red Fort',
        image: 'https://images.unsplash.com/photo-1705861144413-f02e38354648?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
        desc: 'An enduring symbol of India’s freedom, built by Shah Jahan in 1648 — a masterpiece of Mughal architecture.',
        link: 'https://en.wikipedia.org/wiki/Red_Fort'
      },
      {
        name: 'Qutub Minar',
        image: 'https://plus.unsplash.com/premium_photo-1697729438410-d53c666e3810?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
        desc: 'A 12th-century UNESCO World Heritage site standing 73 meters tall — the tallest brick minaret in the world.',
        link: 'https://en.wikipedia.org/wiki/Qutb_Minar'
      },
      {
        name: 'Humayun’s Tomb',
        image: 'https://images.unsplash.com/photo-1637072286312-e81f3fa0bbd2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        desc: 'A Mughal garden tomb and architectural inspiration for the Taj Mahal, exuding serenity and symmetry.',
        link: 'https://en.wikipedia.org/wiki/Humayun%27s_Tomb'
      },
      {
        name: 'Lotus Temple',
        image: 'https://images.unsplash.com/photo-1688257609244-3f2a893f19d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=938',
        desc: 'A Bahá’í temple shaped like a lotus flower — symbolizing unity, peace, and purity amid tranquil surroundings.',
        link: 'https://en.wikipedia.org/wiki/Lotus_Temple'
      },
      {
        name: 'India Gate',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        desc: 'A 42-meter war memorial arch, honoring the valor of Indian soldiers — glowing beautifully under the night sky.',
        link: 'https://en.wikipedia.org/wiki/India_Gate'
      },
      {
        name: 'Chandni Chowk',
        image: 'https://images.unsplash.com/photo-1638415270042-aefde8ea6856?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735',
        desc: 'A sensory wonder — one of Asia’s oldest markets, famed for spices, silks, and authentic street food.',
        link: 'https://en.wikipedia.org/wiki/Chandni_Chowk'
      }
    ],
    travelTips: [
      '🗓️ Best time to visit: October to March (pleasant weather and cultural festivals).',
      '🚇 Metro is the fastest and most affordable way to explore the city.',
      '🕌 Dress modestly and remove footwear when visiting temples or mosques.',
      '🍛 Must-try dishes: Chole Bhature, Paranthe Wali Gali’s parathas, and Karim’s kebabs.',
      '📸 Early mornings are ideal for photographing monuments without crowds.'
    ]
  };
}
