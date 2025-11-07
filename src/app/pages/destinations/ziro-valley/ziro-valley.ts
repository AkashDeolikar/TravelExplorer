import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero';
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-ziro-valley',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './ziro-valley.html',
  styleUrls: ['./ziro-valley.css']
})
export class ZiroValleyPage {
  title = "Ziro Valley, Arunachal Pradesh";
  subtitle = "Golden paddy fields and Apatani heritage";
  heroImage = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1611409671506-65067fae12e8?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1605647717449-829231b33b47?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Arunachal Pradesh"},{"k":"Altitude","v":"1,500 m"},{"k":"Famous For","v":"Ziro Music Festival, Apatani Culture"}];
  description = "Ziro Valley, home to the Apatani tribe, is a UNESCO tentative site known for its rolling rice fields, bamboo houses, and eco-friendly lifestyle. Perfect for slow travel.";
}
