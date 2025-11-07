import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-tawang',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './tawang.html',
  styleUrls: ['./tawang.css']
})
export class TawangPage {
  title = "Tawang, Arunachal Pradesh";
  subtitle = "Snow-clad monasteries and Himalayan serenity";
  heroImage = "https://images.unsplash.com/photo-1605559424843-054b51bcb582?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1594972805488-befb6e9f03cf?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1620746494217-2c518d52fbc8?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1633162306623-5acb7e90aa02?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Arunachal Pradesh"},{"k":"Best Time","v":"March – October"},{"k":"Famous For","v":"Tawang Monastery, Sela Pass, Snow Peaks"}];
  description = "Nestled in the Himalayas, Tawang blends snow-covered landscapes with spiritual calm. Home to one of India’s largest monasteries, it captures the essence of peace above the clouds.";
}
