import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-coorg',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './coorg.html',
  styleUrls: ['./coorg.css']
})
export class CoorgPage {
  title = "Coorg (Madikeri), Karnataka";
  subtitle = "Coffee estates wrapped in morning fog";
  heroImage = "https://images.unsplash.com/photo-1605888561382-e0c4234b9b52?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1602080565923-0b8a1dc1e2ec?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1574169208507-843761748db8?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Karnataka"},{"k":"Best Time","v":"October – March"},{"k":"Famous For","v":"Coffee, Abbey Falls, Scenic Drives"}];
  description = "Known as the Scotland of India, Coorg offers coffee-scented hills, misty plantations, and tranquil homestays surrounded by nature.";
}
