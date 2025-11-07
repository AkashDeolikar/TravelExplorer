import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-kathputli',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './craft.html',
  styleUrls: ['./craft.css']
})
export class KathputliComponent {
  scrollY = 0;

  heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/kathputli-ka-khel-jaipur-rajasthan-1-craft-hero?qlt=82&ts=1726641305694';
  title = 'Kathputli: The Timeless Puppets of Rajasthan';
  location = 'Rajasthan';
  mapLabel = 'Explore Rajasthan';

  sections = [
    {
      heading: 'Strings of Storytelling',
      content: `For centuries, Rajasthan’s wandering Bhat community has brought myths and legends to life through 
      Kathputli — wooden puppets adorned in bright fabrics and mirrors, narrating tales of valor and love.`
    },
    {
      heading: 'Crafted with Character',
      content: `Each puppet is handmade from mango wood, painted with natural dyes, and clothed in traditional Rajasthani attire. 
      Their expressive faces capture emotions that transcend words.`
    },
    {
      heading: 'The Theatre of Tradition',
      content: `Kathputli shows were once royal entertainment — now they carry cultural pride into modern festivals, schools, 
      and even global art circuits.`
    },
    {
      heading: 'Where to Experience It',
      content: `Visit Jaipur’s Kathputli Colony or Jaisalmer’s Desert Festival to watch puppet masters weave magic through movement.`
    }
  ];

  nearby = [
    { name: 'Kathputli Colony, Jaipur', desc: 'Home to hundreds of traditional puppeteers and artists.' },
    { name: 'Jaisalmer Desert Festival', desc: 'Witness Kathputli performances under starlit dunes.' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollY = window.scrollY;
  }
}
