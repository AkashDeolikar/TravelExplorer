import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-majuli',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './majuli.html',
  styleUrls: ['./majuli.css']
})
export class MajuliPage {
  title = "Majuli Island, Assam";
  subtitle = "World’s largest river island — culture on the Brahmaputra";
  heroImage = "https://images.unsplash.com/photo-1605418317363-1cc3a1f1a5a3?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1589773962105-51e870fa440e?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1625912336434-82851d12e46c?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1602475292374-5c0f4b19b547?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Assam"},{"k":"Best Time","v":"October – March"},{"k":"Famous For","v":"Satras, Mask Making, River Culture"}];
  description = "Majuli is a serene island of satras, culture, and ecology — a floating haven where art and spirituality flow with the Brahmaputra River.";
}
