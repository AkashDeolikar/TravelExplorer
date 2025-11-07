import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reiek',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reiek.html',
  styleUrls: ['./reiek.css']
})
export class ReiekComponent {
  title = 'Reiek Village, Mizoram';
  subtitle = 'Gold-Awarded Best Tourism Village in India, 2023';
  heroImage = 'https://images.unsplash.com/photo-1741972584867-05d3c3b2920b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWl6b3JhbXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000';
  // Replace this with the official Reiek hero image from Incredible India

  quickFacts = [
    { k: 'Elevation', v: '≈ 1,465 m' },
    { k: 'Location', v: '≈ 30 km west of Aizawl, Mizoram' },
    { k: 'Award', v: 'India’s Best Tourism Village – Gold, 2023' }
  ];

  highlights = [
    { icon: '🌺', title: 'Anthurium Festival', desc: 'Annual festival celebrating Mizoram’s native flower and culture.' },
    { icon: '🏕️', title: 'Heritage Village', desc: 'Experience traditional Mizo huts representing different tribes.' },
    { icon: '🌄', title: 'Peak Views & Nature', desc: 'Reiek Mountain offers panoramic views, forest walks, and caves.' }
  ];
}
