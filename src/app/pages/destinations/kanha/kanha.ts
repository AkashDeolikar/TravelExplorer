import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-kanha',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './kanha.html',
  styleUrls: ['./kanha.css']
})
export class KanhaPage {
  title = "Kanha National Park, Madhya Pradesh";
  subtitle = "Forest trails of Kipling’s Jungle Book";
  heroImage = "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1603323451392-76d6a07c03fb?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1566008885543-cd5f0b6619a5?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1610477258773-8f25ff3a88e5?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Madhya Pradesh"},{"k":"Best Time","v":"October – June"},{"k":"Famous For","v":"Tigers, Safari, Meadows"}];
  description = "Emerald forests, misty meadows, and tiger trails — Kanha is India’s most photogenic wildlife reserve.";
}
