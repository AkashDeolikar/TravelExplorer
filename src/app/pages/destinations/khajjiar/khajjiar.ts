import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-khajjiar',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './khajjiar.html',
  styleUrls: ['./khajjiar.css']
})
export class KhajjiarPage {
  title = "Khajjiar, Himachal Pradesh";
  subtitle = "Mini Switzerland of India — a serene alpine meadow in the Himalayas";
  heroImage = "https://images.unsplash.com/photo-1595147389795-37094173bfd6?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1550409175-8c6ea0cdb8ab?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1615397340904-9e660b9a0e44?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Himachal Pradesh"},{"k":"Altitude","v":"1,920 m above sea level"},{"k":"Best Time","v":"March – October"}];
  description = "Khajjiar is known for its lush meadows, dense deodar forests, and panoramic views of snow-capped peaks. It is one of India's most picturesque hill stations, perfect for adventure and peace seekers alike.";
}
