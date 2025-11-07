import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-alleppey-backwaters',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class AlleppeyBackwatersComponent {
title = 'Alleppey Backwaters';
location = 'Alappuzha, Kerala';
heroImage = 'https://images.unsplash.com/photo-1663480450637-a635e10ac562?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1333';
overview = `Network of lagoons, canals and inland waterways; famous for houseboat cruises and rural Kerala scenery.`;
history = `Traditionally used for transport and coir trade; today a major eco-tourism destination.`;
weatherSummary = { condition: 'Tropical humid', bestTime: 'October – March' };
monthlyWeather = [ {month:'Jan',min:22,max:32},{month:'Feb',min:23,max:33},{month:'Mar',min:24,max:33},{month:'Apr',min:25,max:34},{month:'May',min:26,max:33},{month:'Jun',min:25,max:31},{month:'Jul',min:24,max:30},{month:'Aug',min:24,max:30},{month:'Sep',min:24,max:31},{month:'Oct',min:24,max:31},{month:'Nov',min:23,max:31},{month:'Dec',min:22,max:31}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Cochin International Airport (80 km)', rail: 'Alappuzha Railway Station', road: 'Well-connected by NH66 and local roads' };
highlights = [ {icon:'🚣',title:'Houseboat Cruises',desc:'Overnight stays on traditional kettuvallams'}, {icon:'🌾',title:'Village Life',desc:'Scenic paddy fields & canals'} ];
nearby = [{name:'Alappuzha Beach',img:'assets/images/alappuzha-beach.webp',desc:'Lighthouse & beach'},{name:'Krishnapuram Palace',img:'assets/images/krishnapuram.webp',desc:'Regional palace & murals'}];
}