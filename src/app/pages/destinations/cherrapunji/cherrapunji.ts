import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../hero/hero'; 
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-cherrapunji',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery, FooterComponent],
  templateUrl: './cherrapunji.html',
  styleUrls: ['./cherrapunji.css']
})
export class CherrapunjiPage {
  title = "Cherrapunji & Mawlynnong, Meghalaya";
  subtitle = "Living root bridges and clouds in your hands";
  heroImage = "https://images.unsplash.com/photo-1596867832858-8a51a10f0e89?auto=format&fit=crop&w=1600&q=80";
  gallery = ["https://images.unsplash.com/photo-1604580645094-94ef16ef1e48?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1594546795488-57c0c5e8e7a3?auto=format&fit=crop&w=1200&q=60","https://images.unsplash.com/photo-1612399332733-5bb59a9ed178?auto=format&fit=crop&w=1200&q=60"];
  facts = [{"k":"State","v":"Meghalaya"},{"k":"Best Time","v":"October – April"},{"k":"Famous For","v":"Living Root Bridges, Waterfalls, Rainforest"}];
  description = "Cherrapunji is the rain capital of the world — waterfalls, living bridges, and endless mist create an ethereal escape.";
}
