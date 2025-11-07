import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-taj-mahal',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class TajMahalComponent {
title = 'Taj Mahal';
location = 'Agra, Uttar Pradesh';
heroImage = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Sundarban_Tiger.jpg';
overview = `A UNESCO World Heritage Site and an enduring symbol of love — the white marble mausoleum built by Shah Jahan.`;
history = `Constructed in the 17th century, the Taj is renowned for its symmetry, carvings and gardens.`;
weatherSummary = { condition: 'Hot summers, cool winters', bestTime: 'October – March' };
monthlyWeather = [ {month:'Jan',min:7,max:20},{month:'Feb',min:10,max:24},{month:'Mar',min:15,max:30},{month:'Apr',min:21,max:36},{month:'May',min:26,max:40},{month:'Jun',min:28,max:39},{month:'Jul',min:27,max:35},{month:'Aug',min:26,max:34},{month:'Sep',min:25,max:34},{month:'Oct',min:20,max:33},{month:'Nov',min:13,max:28},{month:'Dec',min:8,max:22}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Agra Airport (small) / Delhi IGI (200 km)', rail: 'Agra Cantt', road: 'Well-connected via Yamuna Expressway' };
highlights = [ {icon:'🕌',title:'White Marble',desc:'Intricate pietra dura and symmetry'}, {icon:'🌅',title:'Sunrise Views',desc:'Best viewed at dawn'} ];
nearby = [{name:'Agra Fort',img:'assets/images/agra-fort.webp',desc:'Mughal fort & palace'},{name:'Mehtab Bagh',img:'assets/images/mehtab-bagh.webp',desc:'Gardens with Taj view'}];
}