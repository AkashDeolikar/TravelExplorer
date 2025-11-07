import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-aipan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class AipanComponent {
  scrollY = 0;

  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/Aipan-dehradun-uttarakhand-craft-popular?qlt=82';
  title = 'Aipan: The Vibrant Folk Art of Uttarakhand';
  location = 'Uttarakhand';
  mapLabel = 'Explore Uttarakhand';

  sections = [
    {
      heading: 'A Timeless Canvas of Devotion',
      content: `In the tranquil valleys of Uttarakhand, Aipan art blossoms across thresholds and temples. 
      Each pattern — drawn meticulously in rice paste — symbolizes auspicious beginnings, blending devotion, geometry, and grace.`
    },
    {
      heading: 'Crafted by the Women of the Hills',
      content: `Traditionally passed from mothers to daughters, Aipan thrives as a symbol of feminine creativity and continuity. 
      Its intricate mandalas and motifs reflect the rhythm of life in the Kumaon and Garhwal regions.`
    },
    {
      heading: 'Modern Echoes of Tradition',
      content: `Today, projects like “Minakriti – The Aipan Project” breathe new life into this art form — 
      connecting age-old patterns with contemporary design, and helping artisans reach global platforms.`
    },
    {
      heading: 'Where to Experience Aipan',
      content: `Visit Dehradun’s craft hubs or the hill towns of Almora and Nainital to watch artists at work. 
      Engage in workshops and discover how simple lines can narrate centuries of faith and imagination.`
    }
  ];

  nearby = [
    { name: 'Shiv Mandir, Dehradun', desc: 'A tranquil space where artistry and divinity converge.' },
    { name: 'Almora Craft Village', desc: 'Meet the artisans preserving Uttarakhand’s cultural heartbeat.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
