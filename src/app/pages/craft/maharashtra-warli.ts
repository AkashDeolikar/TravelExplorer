import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-warli',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class WarliComponent {
  scrollY = 0;

  heroImage = 'https://t3.ftcdn.net/jpg/13/92/15/28/360_F_1392152805_ZrJUUVofkMFL0vPmMmxYZwsgeOCZ8yZs.jpg';
  title = 'Warli Art: The Tribal Echoes of Maharashtra';
  location = 'Maharashtra';
  mapLabel = 'Explore Maharashtra';

  sections = [
    {
      heading: 'An Ancient Visual Language',
      content: `Warli paintings speak through simple geometric forms — circles for the sun and moon, triangles for mountains, 
      and lines for life. Each canvas becomes a rhythmic story of nature and community.`
    },
    {
      heading: 'The Canvas of Mud and White',
      content: `Traditionally painted on mud walls using rice paste, Warli art captures daily life, harvests, and rituals 
      through minimal, elegant symbolism.`
    },
    {
      heading: 'From Huts to Galleries',
      content: `Once confined to tribal homes, Warli art now graces global galleries, yet remains deeply rooted in its spirit of harmony.`
    },
    {
      heading: 'Where to Experience It',
      content: `Visit Palghar or Dahanu villages to see Warli artists painting with simplicity and soul.`
    }
  ];

  nearby = [
    { name: 'Dahanu Village', desc: 'Home to traditional Warli painters preserving their heritage.' },
    { name: 'Palghar Tribal Museum', desc: 'Displays Warli art and rural lifestyle exhibits.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
