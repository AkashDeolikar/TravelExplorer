import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-phulkari',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class PhulkariComponent {
  scrollY = 0;

  heroImage = 'https://valaikadesign.com/cdn/shop/products/SAI_7355_1024x1024@2x.jpg?v=1603555830';
  title = 'Phulkari: Embroidered Blossoms of Punjab';
  location = 'Punjab';
  mapLabel = 'Explore Punjab';

  sections = [
    {
      heading: 'Threads of Joy and Devotion',
      content: `Phulkari, meaning “flower work,” is the vibrant embroidery that decorates Punjab’s festive attire, 
      crafted with love, patience, and pride.`
    },
    {
      heading: 'A Celebration in Every Stitch',
      content: `Traditionally made by women for weddings and special occasions, Phulkari stitches express stories of joy, 
      family, and togetherness.`
    },
    {
      heading: 'A Revival of Color',
      content: `From dupattas to jackets, modern designers now blend Phulkari into contemporary fashion while preserving its rural charm.`
    },
    {
      heading: 'Where to Experience It',
      content: `Visit Patiala or Amritsar markets to meet artisans creating these colorful masterpieces by hand.`
    }
  ];

  nearby = [
    { name: 'Patiala Handicraft Hub', desc: 'Famous for authentic hand-embroidered Phulkari work.' },
    { name: 'Amritsar Heritage Walk', desc: 'Explore Punjab’s cultural heart with art and craft traditions.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
