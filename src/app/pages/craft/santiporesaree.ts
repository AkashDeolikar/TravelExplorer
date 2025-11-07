import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-santipur-saree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class SantipurSareeComponent {
  scrollY = 0;

  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/Santipore-Saree-west-bengal-craft-hero?qlt=82&ts=1726641485735';
  title = 'Santipur Saree: The Handwoven Grace of Bengal';
  location = 'West Bengal';
  mapLabel = 'Explore West Bengal';

  sections = [
    {
      heading: 'Elegance in Every Thread',
      content: `In the quiet town of Santipur, generations of weavers have created sarees known for their fine texture, 
      pastel hues, and understated charm.`
    },
    {
      heading: 'Weaving Simplicity and Sophistication',
      content: `Crafted on handlooms using pure cotton, the Santipuri saree is breathable, soft, and adorned with geometric motifs 
      inspired by Bengal’s rivers and temples.`
    },
    {
      heading: 'A Tradition Reimagined',
      content: `Today, designers collaborate with local weavers to revive the craft with new color palettes and modern patterns — 
      without losing its soul.`
    },
    {
      heading: 'Where to Experience It',
      content: `Visit Santipur and Fulia, where looms hum softly in courtyards and artisans welcome visitors to witness their legacy.`
    }
  ];

  nearby = [
    { name: 'Santipur Weaving Village', desc: 'Experience live handloom weaving by traditional artisans.' },
    { name: 'Fulia Handloom Cluster', desc: 'Known for exquisite Bengal cotton and blended sarees.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
