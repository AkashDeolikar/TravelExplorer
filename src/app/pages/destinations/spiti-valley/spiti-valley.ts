import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-spiti-valley',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './spiti-valley.html',
  styleUrls: ['./spiti-valley.css']
})
export class SpitiValleyPage {
  title = "Spiti Valley, Himachal Pradesh";
  subtitle = "Cold desert monasteries carved into cliffs";
  heroImage = "https://images.unsplash.com/photo-1616627988785-855c59a1a799?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1612107290540-53f1c2a3b1cb?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1611682431050-38aaac15d3c7?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1613760810863-28378d02a7cc?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Himachal Pradesh"},{"k":"Best Time","v":"June – October"},{"k":"Famous For","v":"Key Monastery, Chandratal Lake"}];
  description = "Known as ‘Little Tibet’, Spiti Valley’s rugged cliffs, turquoise rivers, and ancient monasteries create a surreal, minimalist landscape ideal for adventure and meditation.";
}
