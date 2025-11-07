import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-leh-pangong',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class LehPangongComponent {
title = 'Leh – Pangong Tso';
location = 'Ladakh (Pangong Lake)';
heroImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBIj-CpSRTIbKgweUxKOIanZlLwWdr_-ylg&s';
overview = `High-altitude saltwater lake famed for shifting blue hues against barren mountains.`;
history = `Pangong Tso straddles India and China and has become an iconic Himalayan destination.`;
weatherSummary = { condition: 'Cold desert', bestTime: 'May – September' };
monthlyWeather = [ {month:'Jan',min:-20,max:-6},{month:'Feb',min:-18,max:-4},{month:'Mar',min:-10,max:2},{month:'Apr',min:-2,max:10},{month:'May',min:4,max:18},{month:'Jun',min:8,max:22},{month:'Jul',min:10,max:20},{month:'Aug',min:9,max:19},{month:'Sep',min:2,max:15},{month:'Oct',min:-5,max:8},{month:'Nov',min:-15,max:0},{month:'Dec',min:-20,max:-5}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Leh Kushok Bakula Rimpochee Airport (45 km to town)', rail: 'No direct rail; nearest broad gauge at Jammu/Pathankot', road: 'High-altitude roads (Manali–Leh, Srinagar–Leh)' };
highlights = [ {icon:'🏔️',title:'Spectacular Scenery',desc:'Crystal-clear lake views'}, {icon:'📷',title:'Photography',desc:'Iconic turquoise waters'} ];
nearby = [{name:'Leh Market',img:'assets/images/leh-market.webp',desc:'Local handicrafts'},{name:'Thiksey Monastery',img:'assets/images/thiksey.webp',desc:'Buddhist gompa with views'}];
}