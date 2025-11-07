import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ziro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ziro.html',
  styleUrls: ['../city-style.css']
})
export class ZiroComponent {
  city = {
    name: 'Ziro',
    state: 'Arunachal Pradesh',
    heroImage:
      'https://tripandtales.com/wp-content/uploads/2025/05/Ziro-Valley.jpg',
    tagline: 'Whispers of pines, rhythms of nature — the soul of Arunachal’s valleys.',
    description: `
      Hidden amidst the rolling pine-covered hills of <strong>Lower Subansiri district</strong>, 
      <em>Ziro</em> is a UNESCO World Heritage candidate celebrated for its scenic beauty, 
      unique <strong>Apatani tribal culture</strong>, and eco-conscious way of life.
      Known for its emerald rice fields, misty mornings, and the world-famous <strong>Ziro Music Festival</strong>, 
      the valley blends timeless serenity with vibrant traditions.
      Every element — from the wooden stilt houses to the handwoven shawls — echoes harmony between humans and nature.
    `,
    attractions: [
      {
        name: 'Ziro Valley',
        image: 'https://tripandtales.com/wp-content/uploads/2025/05/Ziro-Valley.jpg',
        desc: 'A sprawling valley of green meadows, pine forests, and rice terraces, encircled by gentle hills.',
        link: 'https://en.wikipedia.org/wiki/Ziro,_Arunachal_Pradesh'
      },
      {
        name: 'Ziro Music Festival',
        image: 'https://assets.cntraveller.in/photos/64f84256de93a1293139a142/4:3/w_1600,h_1200,c_limit/Shot%20by%20Mohit_ZFM2022-215.jpg',
        desc: 'India’s most eco-friendly open-air music festival, held annually amidst nature — a paradise for indie lovers.',
        link: 'https://zirofestival.com'
      },
      {
        name: 'Talley Valley Wildlife Sanctuary',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirPCeGkaN8asS4Ufr6nErYy91CUiUTEJ8WD5hpjD6jkCYq0atP0_spcTcQx425P6aG3IbxJuaKYols2xoJrrG53LCjp9VTNicdU7fzsQJvWIK5BIUYn6wQrv9RrHUF-wsSkP-D49ey4bwJ/s640/wildlife+in+south+india.JPG',
        desc: 'Home to endangered species like the clouded leopard and orchids, this sanctuary preserves primal beauty.',
        link: 'https://en.wikipedia.org/wiki/Talley_Valley_Wildlife_Sanctuary'
      },
      {
        name: 'Apatani Villages (Hong, Bamin, Hari)',
        image: 'https://www.global-gallivanting.com/wp-content/uploads/2015/12/1020242-01-1024x768.jpeg',
        desc: 'Experience Apatani tribal life — bamboo homes, traditional tattoos, and organic farming techniques.',
        link: 'https://en.wikipedia.org/wiki/Apatani_people'
      }
    ],
    travelTips: [
      '🗓️ Best time to visit: March–October (especially during Ziro Music Festival in late September).',
      '🚗 Nearest access: Drive from Naharlagun (100 km) or Tezpur (280 km).',
      '🎵 Experience: Attend the eco-friendly Ziro Music Festival among pine groves.',
      '🍃 Don’t miss: Interacting with Apatani locals — known for their sustainable lifestyle and warmth.'
    ]
  };
}
