import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goa.html',
  styleUrls: ['../city-style.css']
})
export class GoaComponent {
  city = {
    name: 'Goa',
    state: 'Goa',
    heroImage: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    tagline: 'Sun, Sand, and Susegad',
    description: `
      <strong>Goa</strong> is India’s beach paradise — a delightful blend of Portuguese heritage,
      vibrant nightlife, serene churches, and golden coasts.
    `,
    attractions: [
      {
        name: 'Baga Beach',
        desc: 'The ultimate beach for water sports, nightlife, and beach shacks.',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/baga-beach-goa-goa-baga-beach-3-attr-hero?qlt=82&ts=1742166173059',
        link: 'https://www.incredibleindia.gov.in/en/goa/baga-beach'
      },
      {
        name: 'Basilica of Bom Jesus',
        desc: 'A UNESCO World Heritage Site housing the remains of St. Francis Xavier.',
        image: 'https://www.tourmyindia.com/states/goa/image/basilica-of-bom-jesus-goa.webp',
        link: 'https://www.incredibleindia.gov.in/en/goa/basilica-of-bom-jesus'
      },
      {
        name: 'Dudhsagar Falls',
        desc: 'A four-tiered waterfall nestled in the Western Ghats, spectacular during monsoon.',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/4f/07/04.jpg',
        link: 'https://www.incredibleindia.gov.in/en/goa/dudhsagar-falls'
      }
    ],
    travelTips: [
      '🗓️ Best time: November to February.',
      '🍤 Don’t miss Goan seafood and Feni.',
      '🏖️ Visit North Goa for nightlife, South Goa for peace.',
      '🚗 Rent scooters for easy exploration.'
    ]
  };
}
