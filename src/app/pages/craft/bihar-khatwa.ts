import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-khatwa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class KhatwaComponent {
  scrollY = 0;

  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/Durgi-Stone-Carvings-andhra-pradesh-craft-hero?qlt=82&ts=1726641467017';
  title = 'Khatwa: The Artistic Stitchwork of Bihar';
  location = 'Bihar';
  mapLabel = 'Explore Bihar';

  sections = [
    {
      heading: 'Layers of Creativity',
      content: `Khatwa is the traditional appliqué work of Bihar, created by stitching one fabric layer over another. 
      The craft transforms everyday textiles into bold patterns rich with color and symbolism.`
    },
    {
      heading: 'From Quilts to Festivals',
      content: `Khatwa adorns wall hangings, garments, and ceremonial canopies — 
      often inspired by folk tales and nature’s charm.`
    },
    {
      heading: 'The Hands Behind the Art',
      content: `Mostly practiced by women artisans, Khatwa serves as both expression and livelihood, 
      reflecting community, patience, and passion.`
    },
    {
      heading: 'Where to Witness Khatwa',
      content: `Visit Patna or Nalanda craft centers to see this textile tradition blending heritage and modern design.`
    }
  ];

  nearby = [
    { name: 'Patna Handicraft Hub', desc: 'Showcasing Bihar’s textile artistry, including Khatwa and Madhubani.' },
    { name: 'Nalanda Craft Village', desc: 'A vibrant hub of traditional and modern fabric design.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
