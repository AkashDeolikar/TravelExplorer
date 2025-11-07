import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-mysore-palace',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class MysorePalaceComponent {
title = 'Mysore Palace';
location = 'Mysore, Karnataka';
heroImage = 'https://images.unsplash.com/photo-1659126574791-13313aa424bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332';
overview = `Opulent royal palace of the Wodeyar dynasty, famous for Indo-Saracenic architecture and evening illuminations.`;
history = `Built and rebuilt over centuries, the palace is a focal point of Dasara celebrations.`;
weatherSummary = { condition: 'Moderate tropical', bestTime: 'October – March' };
monthlyWeather = [ {month:'Jan',min:14,max:28},{month:'Feb',min:16,max:30},{month:'Mar',min:18,max:33},{month:'Apr',min:20,max:35},{month:'May',min:21,max:36},{month:'Jun',min:20,max:34},{month:'Jul',min:19,max:31},{month:'Aug',min:19,max:30},{month:'Sep',min:19,max:30},{month:'Oct',min:18,max:30},{month:'Nov',min:16,max:29},{month:'Dec',min:14,max:28}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Mysore Airport (12 km) / Bangalore Airport (150 km)', rail: 'Mysore Junction', road: 'Good road connectivity from Bangalore and other cities' };
highlights = [ {icon:'🏰',title:'Royal Residences',desc:'Palace interiors and durbar halls'}, {icon:'💡',title:'Night Illumination',desc:'Thousands of lights after dusk'} ];
nearby = [{name:'Chamundi Hill',img:'assets/images/chamundi-hill.webp',desc:'Temple & panoramic views'},{name:'Brindavan Gardens',img:'assets/images/brindavan.webp',desc:'Terraced gardens & musical fountain'}];
}