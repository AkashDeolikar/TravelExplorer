import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-muga-silk',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class MugaSilkComponent {
  scrollY = 0;

  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/muga-silk-assam-craft-hero?qlt=82&ts=1727012318071';
  title = 'Muga Silk: The Golden Heritage of Assam';
  location = 'Assam';
  mapLabel = 'Explore Assam';

  sections = [
    {
      heading: 'The Pride of Assam',
      content: `Woven from the exclusive Muga silkworm found only in Assam, this golden-hued silk 
      is prized for its natural sheen, durability, and elegance. It’s often reserved for royalty and ceremonies.`
    },
    {
      heading: 'Nature’s Own Gold',
      content: `The golden luster of Muga increases with every wash, making it a timeless heirloom. 
      Each thread symbolizes Assam’s rich biodiversity and centuries-old craftsmanship.`
    },
    {
      heading: 'A Labor of Love',
      content: `From rearing silkworms to spinning and weaving, every step is done by hand. 
      The fabric’s texture reflects the devotion of Assamese weavers who turn nature’s fiber into art.`
    },
    {
      heading: 'Where to Experience It',
      content: `Visit Sualkuchi, the “Manchester of Assam,” to watch master weavers bring this silk to life 
      — an experience soaked in color, rhythm, and pride.`
    }
  ];

  nearby = [
    { name: 'Sualkuchi Village', desc: 'The heart of Assam’s silk industry, known for exquisite Muga sarees.' },
    { name: 'Guwahati Handloom Centre', desc: 'Showcases heritage weaves from across Assam.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
