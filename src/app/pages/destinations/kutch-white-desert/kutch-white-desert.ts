import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-kutch-white-desert',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './kutch-white-desert.html',
  styleUrls: ['./kutch-white-desert.css']
})
export class KutchWhiteDesertPage {
  title = "Kutch (White Desert), Gujarat";
  subtitle = "Moonlit salt plains and surreal reflections";
  heroImage = "https://images.unsplash.com/photo-1604933763338-84f5e9936d2d?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1604933833819-f34e5c0e0b60?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1614006846949-47b0ab04f833?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1623330188888-f1dfda4010e2?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Gujarat"},{"k":"Best Time","v":"November – February"},{"k":"Famous For","v":"Rann Utsav, Salt Desert, Handicrafts"}];
  description = "The Great Rann of Kutch glows under full moonlight — an endless white canvas that feels like walking on clouds.";
}
