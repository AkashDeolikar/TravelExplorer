import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-madla',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './madla.html',
  styleUrls: ['./madla.css']
})
export class MadlaPage {
  title = "Madla, Madhya Pradesh";
  subtitle = "Gateway to Panna National Park and the serene Ken River";
  heroImage = "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1589391886645-d51941baf7cf?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1522629972674-3dabd4d9a53b?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1533749655829-2e786b4ab7c4?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Madhya Pradesh"},{"k":"Nearest Airport","v":"Khajuraho (HJR)"},{"k":"Best Time","v":"October – March"}];
  description = "Madla is a peaceful village along the Ken River, offering a glimpse into Bundelkhandi life, culture, and wildlife near Panna National Park.";
}
