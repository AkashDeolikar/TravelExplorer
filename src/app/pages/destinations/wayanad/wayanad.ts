import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-wayanad',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './wayanad.html',
  styleUrls: ['./wayanad.css']
})
export class WayanadPage {
  title = "Wayanad, Kerala";
  subtitle = "Waterfalls and bamboo forests of the Western Ghats";
  heroImage = "https://images.unsplash.com/photo-1599058917210-2a11aa1c5a93?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1616242476118-3d9d67b91cb3?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1602146012330-c2dfbbf42a19?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1604411033318-7aee0a85d958?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Kerala"},{"k":"Best Time","v":"October – May"},{"k":"Famous For","v":"Edakkal Caves, Waterfalls, Trekking"}];
  description = "Wayanad is an emerald escape — misty mountains, spice plantations, and sustainable living surrounded by nature.";
}
