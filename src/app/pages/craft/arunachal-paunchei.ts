import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-paunchei',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class PauncheiComponent {
  scrollY = 0;

  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/mizo-puanchei-Mizoram-1-craft-hero?qlt=82&ts=1726641362702';
  title = 'Paunchei Weaving: The Vibrant Textile Tradition of Arunachal Pradesh';
  location = 'Arunachal Pradesh';
  mapLabel = 'Explore Arunachal Pradesh';

  sections = [
    {
      heading: 'Threads of Culture and Identity',
      content: `In the eastern Himalayas of Arunachal Pradesh, the art of Paunchei weaving 
      captures the essence of tribal identity. Every woven pattern tells stories of ancestry, 
      community, and pride — passed down through generations with unwavering devotion.`
    },
    {
      heading: 'A Symphony of Colors and Symbols',
      content: `Paunchei textiles are renowned for their vibrant hues and symbolic motifs — 
      each color representing harmony, courage, or prosperity. 
      Women artisans weave intricate geometric and nature-inspired patterns on traditional looms, 
      blending artistry with cultural meaning.`
    },
    {
      heading: 'Tradition in Every Thread',
      content: `From daily attire to ceremonial robes, Paunchei fabrics hold deep spiritual value. 
      The process involves hand-spun cotton or silk threads, natural dyes, and immense patience — 
      each piece reflecting both craftsmanship and reverence for nature.`
    },
    {
      heading: 'Weaving the Future',
      content: `As modernization reaches the remote hills, initiatives are helping 
      preserve and promote Paunchei weaving through cooperatives and design collaborations. 
      Visitors can meet artisans in villages like Pasighat and Aalo, witnessing the 
      rhythmic beauty of weaving that binds communities together.`
    }
  ];

  nearby = [
    { name: 'Aalo Handloom Cluster', desc: 'Home to skilled weavers preserving the Galo tribe’s textile legacy.' },
    { name: 'Pasighat Cultural Centre', desc: 'Experience live demonstrations of traditional weaving techniques.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
