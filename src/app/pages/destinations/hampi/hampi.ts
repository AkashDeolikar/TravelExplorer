import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-hampi',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './hampi.html',
  styleUrls: ['./hampi.css']
})
export class HampiPage {
  title = "Hampi, Karnataka";
  subtitle = "Ruins of a golden empire amidst boulder hills";
  heroImage = "https://images.unsplash.com/photo-1579879313890-fd527790d6b8?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1611042553484-c2b48f77643d?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1598899134739-24aabe9a94ad?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1611042578045-7abbbbf6f4f4?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Karnataka"},{"k":"Best Time","v":"November – February"},{"k":"Famous For","v":"Vittala Temple, Virupaksha Temple, Ruins"}];
  description = "Hampi’s ancient temples and surreal boulder landscapes create a cinematic contrast between history and nature. A timeless UNESCO heritage site.";
}
