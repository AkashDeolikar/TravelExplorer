import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-andaman-havelock',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './andaman-havelock.html',
  styleUrls: ['./andaman-havelock.css']
})
export class AndamanHavelockPage {
  title = "Havelock Island, Andaman & Nicobar";
  subtitle = "Turquoise lagoons and glassy ocean gradients";
  heroImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"Territory","v":"Andaman & Nicobar Islands"},{"k":"Best Time","v":"October – May"},{"k":"Famous For","v":"Beaches, Diving, Coral Reefs"}];
  description = "Known for Radhanagar Beach, Havelock is a tropical paradise with azure waters, coral reefs, and glassy visuals straight out of a dream.";
}
