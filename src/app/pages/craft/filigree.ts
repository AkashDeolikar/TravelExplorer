import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-filigree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class FiligreeComponent {
  scrollY = 0;

  heroImage = 'https://silverlinings.in/cdn/shop/products/SB001.jpg?v=1757269947&width=1445';
  title = 'Cuttack Filigree: Silver Threads of Tradition';
  location = 'Odisha';
  mapLabel = 'Explore Odisha';

  sections = [
    {
      heading: 'The Art of Silver Lace',
      content: `In the old lanes of Cuttack, silver is not just a metal — it’s poetry. 
      Filigree, locally known as Tarakasi, transforms fine silver wires into intricate jewelry, idols, and ornaments.`
    },
    {
      heading: 'A Craft of Precision',
      content: `Each piece is shaped using nothing but hand tools and patience, weaving silver into delicate spirals, curls, and motifs. 
      The result — a breathtaking dance of light and craftsmanship.`
    },
    {
      heading: 'A Legacy in Every Thread',
      content: `The tradition dates back to over 500 years, cherished by families who continue to define Cuttack’s artistic identity.`
    },
    {
      heading: 'Where to Experience It',
      content: `Visit Cuttack’s Tarakasi Lane and watch artisans spin silver threads finer than human hair into timeless art.`
    }
  ];

  nearby = [
    { name: 'Cuttack Tarakasi Lane', desc: 'Famous for authentic handmade silver filigree jewelry.' },
    { name: 'Odisha Crafts Museum, Bhubaneswar', desc: 'Showcases traditional silver artistry and Odia heritage.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
