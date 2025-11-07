import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-patan-patola',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class PatanPatolaComponent {
  scrollY = 0;

  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/patan-patola-gujarat?qlt=82';
  title = 'Patan Patola: The Double Ikat Marvel of Gujarat';
  location = 'Gujarat';
  mapLabel = 'Explore Gujarat';

  sections = [
    {
      heading: 'A Royal Weave of Symmetry',
      content: `Each Patola saree is woven using the double ikat technique — a complex art requiring perfect alignment 
      of dyed threads both warp and weft.`
    },
    {
      heading: 'Months of Mastery',
      content: `A single saree can take 6 months to a year, handwoven by Salvi families who’ve preserved this 900-year-old tradition.`
    },
    {
      heading: 'Symbol of Purity and Prestige',
      content: `Patolas were once reserved for queens and aristocrats, their geometric designs believed to bring good fortune.`
    },
    {
      heading: 'Where to Experience It',
      content: `Visit Patan’s Patola House Museum to witness artisans weaving legends into silk.`
    }
  ];

  nearby = [
    { name: 'Patan Patola Museum', desc: 'Showcases live demonstrations and Patola history.' },
    { name: 'Rani ki Vav', desc: 'A UNESCO heritage site near Patan — an architectural gem.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
