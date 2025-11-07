import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-lakshadweep',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './lakshadweep.html',
  styleUrls: ['./lakshadweep.css']
})
export class LakshadweepPage {
  title = "Lakshadweep Islands";
  subtitle = "Turquoise lagoons and coral dreamscapes";
  heroImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"Territory","v":"Lakshadweep"},{"k":"Best Time","v":"October – May"},{"k":"Famous For","v":"Beaches, Diving, Blue Lagoons"}];
  description = "Lakshadweep is pure ocean minimalism — 36 coral atolls forming an untouched tropical universe with Apple-level calm.";
}
