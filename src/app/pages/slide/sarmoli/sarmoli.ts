import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sarmoli',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sarmoli.html',
  styleUrls: ['./sarmoli.css']
})
export class SarmoliComponent {
  title = 'Sarmoli, Munsiyari';
  subtitle = 'A model of community-based ecotourism in Uttarakhand';
  heroImage = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80';

  highlights = [
    { icon: '🌄', title: 'Panoramic Peaks', desc: 'Views of Panchachuli & Nanda Devi ranges.' },
    { icon: '🏡', title: 'Community Homestays', desc: 'Locally-run homestays and cultural immersion.' },
    { icon: '🌱', title: 'Sustainable Practices', desc: 'Organic farming, van panchayat conservation & ecotourism.' }
  ];

  quickFacts = [
    { k: 'Altitude', v: '≈ 2300 m' },
    { k: 'Nearest Rail', v: 'Kathgodam (by road)' },
    { k: 'Best time', v: 'Apr–Jun, Sep–Nov' }
  ];
}
