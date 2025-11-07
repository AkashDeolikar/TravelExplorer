import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-udaipur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './udaipur.html',
  styleUrls: ['../city-style.css']
})
export class UdaipurComponent {
  city = {
    name: 'Udaipur',
    state: 'Rajasthan',
    heroImage: 'https://images.unsplash.com/photo-1589901164570-f9de6556e1c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
    tagline: 'The City of Lakes and Royal Romance',
    description: `
      <strong>Udaipur</strong>, the jewel of Rajasthan, enchants with its shimmering lakes, marble palaces, and timeless charm.
      Known as the "Venice of the East", it blends regal heritage with serene natural beauty.
    `,
    attractions: [
      {
        name: 'City Palace',
        desc: 'A grand complex overlooking Lake Pichola showcasing Mewar’s royal heritage.',
        image: 'https://images.unsplash.com/photo-1651478881270-6c3a0fc883f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1131',
        link: 'https://www.incredibleindia.gov.in/en/rajasthan/udaipur/city-palace'
      },
      {
        name: 'Lake Pichola',
        desc: 'An artificial lake famed for boat rides and sunset views over royal islands.',
        image: 'https://vnvtours.com/wp-content/uploads/2023/11/lake-pichola.webp',
        link: 'https://www.incredibleindia.gov.in/en/rajasthan/udaipur/lake-pichola'
      },
      {
        name: 'Jag Mandir',
        desc: 'A 17th-century island palace that inspired the Taj Mahal’s design.',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/jag-mandir-palace-udaipur-rajasthan-1-new-attr-hero?qlt=82&ts=1742192950693',
        link: 'https://www.incredibleindia.gov.in/en/rajasthan/udaipur/jag-mandir'
      }
    ],
    travelTips: [
      '🗓️ Best time: October to March.',
      '🚤 Sunset boat rides are a must.',
      '🎭 Attend Mewar Festival for cultural grandeur.',
      '🍛 Try Laal Maas and Dal Baati Churma.'
    ]
  };
}
