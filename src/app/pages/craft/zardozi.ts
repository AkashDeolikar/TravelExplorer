import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-zardozi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class ZardoziComponent {
  scrollY = 0;

  heroImage = 'https://cdn0.weddingwire.in/article/6629/3_2/1280/jpg/129266-zardosi-work-google-art.jpeg';
  title = 'Zardozi: The Royal Embroidery of Lucknow';
  location = 'Uttar Pradesh';
  mapLabel = 'Explore Uttar Pradesh';

  sections = [
    {
      heading: 'Gold Threads of Royalty',
      content: `Zardozi, meaning “gold embroidery,” once adorned the robes of Mughal emperors. 
      Crafted with metallic threads, sequins, and pearls, it remains one of India’s most opulent art forms.`
    },
    {
      heading: 'The Craft of Majesty',
      content: `Each design is drawn on silk or velvet, then embroidered with real gold or silver-coated threads — 
      transforming fabric into a canvas of luxury.`
    },
    {
      heading: 'An Heirloom of Lucknow',
      content: `Generations of artisans continue to nurture this Mughal legacy in Lucknow, handcrafting bridal wear, decor, 
      and couture that bridge the past and present.`
    },
    {
      heading: 'Where to Experience It',
      content: `Visit Chowk and Aminabad markets in Lucknow to witness Zardozi embroidery alive in its full splendor.`
    }
  ];

  nearby = [
    { name: 'Chowk Market, Lucknow', desc: 'Famous for handcrafted Zardozi bridal wear and accessories.' },
    { name: 'Aminabad Craft Lane', desc: 'Explore ateliers preserving centuries-old embroidery techniques.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
