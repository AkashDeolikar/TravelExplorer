import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-pachmarhi',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './pachmarhi.html',
  styleUrls: ['./pachmarhi.css']
})
export class PachmarhiPage {
  title = "Pachmarhi, Madhya Pradesh";
  subtitle = "Satpura hills, waterfalls, and colonial charm";
  heroImage = "https://images.unsplash.com/photo-1573217686042-10b98a58f582?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1573217686042-10b98a58f582?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1572411840023-1e1d999a22db?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1559884743-1e28d3b3b7de?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Madhya Pradesh"},{"k":"Best Time","v":"October – June"},{"k":"Famous For","v":"Bee Falls, Satpura National Park, Caves"}];
  description = "Madhya Pradesh’s only hill station — waterfalls, sandstone caves, and British-era cottages hidden in lush forest.";
}
