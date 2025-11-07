import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-auli',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './auli.html',
  styleUrls: ['./auli.css']
})
export class AuliPage {
  title = "Auli, Uttarakhand";
  subtitle = "Ski slopes and pine forests overlooking Nanda Devi";
  heroImage = "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1586244420872-285d8de7b344?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1548676344-ffdd3a2f9c93?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1603212129164-7d9a441c1e37?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Uttarakhand"},{"k":"Altitude","v":"2,800 m"},{"k":"Best Time","v":"December – March"}];
  description = "Auli is India’s top ski resort, known for its powdery slopes, apple orchards, and 360° views of the Himalayas. A visual delight of snow, pine, and serenity.";
}
