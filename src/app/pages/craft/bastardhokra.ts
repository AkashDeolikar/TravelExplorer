import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-bastar-dhokra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class BastarDhokraComponent {
  scrollY = 0;

  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/bastar-dhokra-bell-metal-dhokra-art-handicraft-chhattisgarh-1-craft-hero?qlt=82&ts=1726641545083';
  title = 'Bastar Dhokra: Ancient Art in Metal';
  location = 'Chhattisgarh';
  mapLabel = 'Explore Chhattisgarh';

  sections = [
    {
      heading: 'A 4,000-Year-Old Legacy',
      content: `Bastar’s Dhokra craft traces its lineage to the Indus Valley Civilization. 
      Using the lost-wax casting method, artisans shape brass into breathtaking human and animal forms.`
    },
    {
      heading: 'The Art of Molten Bronze',
      content: `Each sculpture is first shaped in beeswax, wrapped in clay, then molten metal is poured inside — 
      a perfect blend of science and spirit handed down through generations.`
    },
    {
      heading: 'Nature and Myth Intertwined',
      content: `Dhokra motifs celebrate tribal life — deities, hunters, animals, and dancers — 
      echoing Bastar’s harmony with nature.`
    },
    {
      heading: 'Where to See It',
      content: `Visit Kondagaon or Jagdalpur to explore artisan clusters where each piece tells 
      a story of earth, fire, and metal.`
    }
  ];

  nearby = [
    { name: 'Kondagaon Craft Village', desc: 'Home to master Dhokra sculptors keeping the tradition alive.' },
    { name: 'Jagdalpur Tribal Museum', desc: 'Exhibits Bastar’s vibrant tribal arts and traditions.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
