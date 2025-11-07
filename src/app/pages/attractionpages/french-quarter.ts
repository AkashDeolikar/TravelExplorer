import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-french-quarter',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class FrenchQuarterComponent {
title = 'The French Quarter';
location = 'Pondicherry (Puducherry)';
heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/the-french-quarter-puducherry-puducherry-1-musthead-hero?qlt=82&ts=1726656209068';
overview = `Also called White Town, the French Quarter charms with colonial architecture, cafés and boulevards.`;
history = `Formerly a French colonial enclave, the quarter retains European-style villas and churches.`;
weatherSummary = { condition: 'Tropical', bestTime: 'November – February' };
monthlyWeather = [ {month:'Jan',min:21,max:30},{month:'Feb',min:22,max:31},{month:'Mar',min:24,max:33},{month:'Apr',min:26,max:34},{month:'May',min:27,max:35},{month:'Jun',min:26,max:33},{month:'Jul',min:25,max:32},{month:'Aug',min:25,max:31},{month:'Sep',min:25,max:31},{month:'Oct',min:24,max:32},{month:'Nov',min:23,max:31},{month:'Dec',min:22,max:30}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Pondicherry Airport (small), Chennai Airport (150 km)', rail: 'Pondicherry Railway Station', road: 'Well-connected by NH32' };
highlights = [ {icon:'🏛️',title:'Colonial Streets',desc:'Colorful villas & French cafés'}, {icon:'☕',title:'Cafe Culture',desc:'Seaside cafés and bakeries'} ];
nearby = [{name:'Promenade Beach',img:'assets/images/promenade.webp',desc:'Seafront walkway'},{name:'Auroville',img:'assets/images/auroville.webp',desc:'Experimental township'}];
}