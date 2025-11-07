import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-walnut-wood',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class WalnutWoodComponent {
  scrollY = 0;

  heroImage = 'https://shop.gaatha.com/image/catalog/Khalil-Mohad.-Kalval/06_06_2024/Grapes-Wood-Carving-Walnut-wood-box.jpg';
  title = 'Walnut Wood Carving: The Soul of Kashmiri Craftsmanship';
  location = 'Jammu & Kashmir';
  mapLabel = 'Explore Jammu & Kashmir';

  sections = [
    {
      heading: 'Carved from the Valleys',
      content: `Kashmiri artisans turn walnut wood into masterpieces — from delicate boxes to grand furniture — 
      blending Mughal elegance with local ingenuity.`
    },
    {
      heading: 'The Craft of Finesse',
      content: `Only the finest walnut wood, aged for years, is chosen. Carvers then bring it alive with motifs of chinars, 
      vines, and flowers that mirror the valley’s serenity.`
    },
    {
      heading: 'A Legacy in Every Grain',
      content: `Passed down through generations, this heritage craft symbolizes grace, patience, and an eternal connection to nature.`
    },
    {
      heading: 'Where to Find It',
      content: `Stroll through Srinagar’s markets or visit artisan homes in Anantnag for authentic hand-carved treasures.`
    }
  ];

  nearby = [
    { name: 'Srinagar Handicraft Market', desc: 'Renowned for authentic walnut furniture and decor.' },
    { name: 'Anantnag Artisan Workshops', desc: 'Experience the artistry firsthand in traditional workshops.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
