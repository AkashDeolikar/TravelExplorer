import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-leh-pangong',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './leh-pangong.html',
  styleUrls: ['./leh-pangong.css']
})
export class LehPangongPage {
  title = "Leh & Pangong Tso, Ladakh";
  subtitle = "Mirror lakes and minimalist cold desert beauty";
  heroImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1552915161-555d9494a2cb?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1579517487560-82a71e8b8a53?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1564079955454-1e12a9be9a14?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"Union Territory","v":"Ladakh"},{"k":"Best Time","v":"May – September"},{"k":"Famous For","v":"Pangong Lake, Nubra Valley, Monasteries"}];
  description = "Ladakh is where surreal meets sublime — vast skies, tranquil monasteries, and the glassy reflection of Pangong Lake. A destination for clarity and stillness.";
}
