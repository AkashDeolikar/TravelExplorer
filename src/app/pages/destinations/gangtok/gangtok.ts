import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-gangtok',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './gangtok.html',
  styleUrls: ['./gangtok.css']
})
export class GangtokPage {
  title = "Gangtok, Sikkim";
  subtitle = "Mountain modernism with Buddhist calm";
  heroImage = "https://images.unsplash.com/photo-1612461333483-b5e0fa6ec5ce?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1612461539068-f83560c9f580?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1612432785182-bbd909c6a011?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1612432785033-018a38e6f987?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Sikkim"},{"k":"Best Time","v":"March – June, October – December"},{"k":"Famous For","v":"Rumtek Monastery, MG Marg, Tsomgo Lake"}];
  description = "Gangtok offers a balanced harmony of city rhythm and mountain stillness — clean streets, monasteries, and Himalayan views.";
}
