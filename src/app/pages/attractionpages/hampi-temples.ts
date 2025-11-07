import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-hampi-temples',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class HampiTemplesComponent {
title = 'Hampi Temples';
location = 'Hampi, Karnataka';
heroImage = 'https://plus.unsplash.com/premium_photo-1697730426305-113c62434f97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171';
overview = `Ruins of Vijayanagara Empire — giant boulder-strewn landscapes dotted with temples and market streets.`;
history = `Hampi was the capital of the Vijayanagara Empire and is now a UNESCO World Heritage Site.`;
weatherSummary = { condition: 'Hot & dry', bestTime: 'October – February' };
monthlyWeather = [ {month:'Jan',min:16,max:32},{month:'Feb',min:18,max:34},{month:'Mar',min:21,max:37},{month:'Apr',min:24,max:39},{month:'May',min:26,max:40},{month:'Jun',min:25,max:36},{month:'Jul',min:23,max:33},{month:'Aug',min:23,max:32},{month:'Sep',min:23,max:33},{month:'Oct',min:21,max:33},{month:'Nov',min:18,max:31},{month:'Dec',min:16,max:31}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Hubli Airport (160 km)', rail: 'Hospet Junction (13 km)', road: 'Hospet–Hampi local roads' };
highlights = [ {icon:'🏺',title:'Vijayanagara Ruins',desc:'Temple complexes & monuments'}, {icon:'🧱',title:'Boulder Landscape',desc:'Unique rock formations'} ];
nearby = [{name:'Virupaksha Temple',img:'assets/images/virupaksha.webp',desc:'Active temple in Hampi'},{name:'Vittala Temple',img:'assets/images/vittala.webp',desc:'Stone chariot & musical pillars'}];
}