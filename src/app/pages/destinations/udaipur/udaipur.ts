import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-udaipur',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './udaipur.html',
  styleUrls: ['./udaipur.css']
})
export class UdaipurPage {
  title = "Udaipur, Rajasthan";
  subtitle = "City of Lakes — reflections of royal luxury";
  heroImage = "https://images.unsplash.com/photo-1591843339901-2e5bbf0125b9?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1602491673729-8b8b0f4c4f5f?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1619270930671-dcfef6b1c3f0?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1594553936720-73dbd7bbf5b2?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Rajasthan"},{"k":"Best Time","v":"October – March"},{"k":"Famous For","v":"City Palace, Lake Pichola, Jag Mandir"}];
  description = "Udaipur is elegance personified — serene lakes, white marble palaces, and heritage streets that feel like an Apple commercial in motion.";
}
