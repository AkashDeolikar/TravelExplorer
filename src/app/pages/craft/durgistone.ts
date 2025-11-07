import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-durgi-stone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class DurgiStoneComponent {
  scrollY = 0;

  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/Durgi-Stone-Carvings-andhra-pradesh-craft-hero?qlt=82&ts=1726641467017';
  title = 'Durgi Stone Carving: Sculpting Eternity in Stone';
  location = 'Andhra Pradesh';
  mapLabel = 'Explore Andhra Pradesh';

  sections = [
    {
      heading: 'A Heritage Carved in Stone',
      content: `Originating from the Durgi village in Andhra Pradesh, this craft is as ancient as temple architecture itself. 
      Artisans carve exquisite figures and deities out of soft limestone.`
    },
    {
      heading: 'The Art of Precision',
      content: `Every chisel stroke reveals devotion — transforming raw stone into idols, panels, and ornamental pieces 
      that echo centuries of South Indian craftsmanship.`
    },
    {
      heading: 'Tradition Meets Innovation',
      content: `Modern artisans now experiment with contemporary sculptures while preserving the sacred essence of Durgi art.`
    },
    {
      heading: 'Visit the Craft Heartland',
      content: `Explore Durgi near Guntur to see the artisans sculpt with a divine blend of faith and finesse.`
    }
  ];

  nearby = [
    { name: 'Durgi Craft Training Institute', desc: 'A hub nurturing new generations of stone carvers.' },
    { name: 'Guntur Art Market', desc: 'Features beautiful limestone carvings and temple replicas.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
