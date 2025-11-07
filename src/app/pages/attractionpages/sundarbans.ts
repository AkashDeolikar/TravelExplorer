import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-sundarbans',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class SundarbansComponent {
title = 'Sundarbans National Park';
location = 'West Bengal (mangrove delta)';
heroImage = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Sundarban_Tiger.jpg';
overview = `World’s largest mangrove forest, famous for Royal Bengal tigers, estuarine ecology, and waterways.`;
history = `A UNESCO World Heritage Site protecting unique flora and fauna across a vast delta.`;
weatherSummary = { condition: 'Tropical, humid, monsoon', bestTime: 'November – February' };
monthlyWeather = [ {month:'Jan',min:12,max:25},{month:'Feb',min:15,max:28},{month:'Mar',min:20,max:32},{month:'Apr',min:24,max:35},{month:'May',min:26,max:35},{month:'Jun',min:26,max:34},{month:'Jul',min:26,max:33},{month:'Aug',min:26,max:33},{month:'Sep',min:25,max:33},{month:'Oct',min:23,max:32},{month:'Nov',min:18,max:30},{month:'Dec',min:14,max:27}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Netaji Subhas Chandra Bose International Airport (Kolkata) + local transfer', rail: 'Canning/Godkhali (gateway points)', road: 'Boat safaris from Sundarbans entry points' };
highlights = [ {icon:'🐯',title:'Wildlife',desc:'Chance to spot Bengal tiger and estuarine fauna'}, {icon:'🌿',title:'Mangrove Ecology',desc:'Unique tidal ecosystem'} ];
nearby = [{name:'Sajnekhali',img:'assets/images/sajnekhali.webp',desc:'Birdwatching & interpretation center'},{name:'Dobanki',img:'assets/images/dobanki.webp',desc:'Popular safari zone'}];
}