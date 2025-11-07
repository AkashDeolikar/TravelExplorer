import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-cherai-beach',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class CheraiBeachComponent {
title = 'Cherai Beach';
location = 'Vypin Island, Kochi, Kerala';
heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/cherai-beach-kochi-kerala-1-attr-hero?qlt=82&ts=1742155796256';
overview = `Long sandy beach on Vypin Island, popular for swimming, sunrises and backwater views.`;
history = `A favored local getaway known for coconut groves and seafood shacks.`;
weatherSummary = { condition: 'Tropical', bestTime: 'October – February' };
monthlyWeather = [ {month:'Jan',min:22,max:32},{month:'Feb',min:23,max:33},{month:'Mar',min:24,max:33},{month:'Apr',min:25,max:34},{month:'May',min:26,max:33},{month:'Jun',min:25,max:31},{month:'Jul',min:24,max:30},{month:'Aug',min:24,max:30},{month:'Sep',min:24,max:31},{month:'Oct',min:24,max:31},{month:'Nov',min:23,max:31},{month:'Dec',min:22,max:31}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Cochin International Airport (40 km)', rail: 'Ernakulam Junction (30 km)', road: 'Accessible via Vypin–Kochi roads and ferries' };
highlights = [ {icon:'🏖️',title:'Golden Sand',desc:'Wide swimmable beach'}, {icon:'🌅',title:'Sunrises',desc:'Beautiful early morning views'} ];
nearby = [{name:'Fort Kochi',img:'assets/images/fort-kochi.webp',desc:'Colonial quarter'},{name:'Vypin Lighthouse',img:'assets/images/vypin-lighthouse.webp',desc:'Coastal viewpoint'}];
}