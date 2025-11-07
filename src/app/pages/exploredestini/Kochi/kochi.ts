import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kochi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kochi.html',
  styleUrls: ['../city-style.css']
})
export class KochiComponent {
  city = {
    name: 'Kochi',
    state: 'Kerala',
    heroImage: 'https://c.ndtvimg.com/2025-03/qi8ql9j_fort-kochi_625x300_23_March_25.jpg?im=FaceCrop,algorithm=dnn,width=545,height=307',
    tagline: 'The Queen of the Arabian Sea',
    description: `
      <strong>Kochi</strong> — Kerala’s coastal gem — is a vibrant fusion of colonial charm, spice-scented air, 
      and backwater beauty. From Chinese fishing nets to art cafés, the city is a hub of culture and creativity.
    `,
    attractions: [
      {
        name: 'Fort Kochi',
        desc: 'A historic area showcasing Portuguese, Dutch, and British architecture.',
        image: 'Fort Kochi',
        link: 'https://en.wikipedia.org/wiki/Fort_Kochi'
      },
      {
        name: 'Mattancherry Palace',
        desc: 'Also called the Dutch Palace, adorned with murals of Hindu epics.',
        image: 'https://www.holidify.com/images/cmsuploads/compressed/attr_1101_20190412091253.jpg',
        link: 'https://en.wikipedia.org/wiki/Mattancherry_Palace'
      },
      {
        name: 'Marine Drive',
        desc: 'A scenic promenade overlooking the calm backwaters of Kochi.',
        image: 'https://media1.thrillophilia.com/filestore/ab9e40ucl6lqsw69lkvy1m7qf76j_shutterstock_2165903981.jpg',
        link: 'https://en.wikipedia.org/wiki/Marine_Drive,_Kochi'
      }
    ],
    travelTips: [
      '🗓️ Best time: September to March.',
      '🚤 Take a ferry to explore the backwaters.',
      '☕ Enjoy Kerala coffee at Fort Kochi cafés.',
      '🎭 Attend Kochi-Muziris Biennale for art lovers.'
    ]
  };
}
