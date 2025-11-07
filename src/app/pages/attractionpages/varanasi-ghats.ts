import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-varanasi-ghats',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class VaranasiGhatsComponent {
title = 'Varanasi Ghats';
location = 'Varanasi, Uttar Pradesh';
heroImage = 'https://varanasismartcity.gov.in//assets/images/images/DashashwamedhGhat.jpg';
overview = `Sacred riverfront steps along the Ganges where rituals, prayers and ceremonies have continued for millennia.`;
history = `One of the world’s oldest living cities and a major pilgrimage centre for Hindus.`;
weatherSummary = { condition: 'Humid subtropical', bestTime: 'October – March' };
monthlyWeather = [ {month:'Jan',min:8,max:22},{month:'Feb',min:10,max:26},{month:'Mar',min:15,max:33},{month:'Apr',min:20,max:38},{month:'May',min:25,max:42},{month:'Jun',min:26,max:40},{month:'Jul',min:25,max:35},{month:'Aug',min:25,max:34},{month:'Sep',min:24,max:34},{month:'Oct',min:20,max:33},{month:'Nov',min:13,max:28},{month:'Dec',min:9,max:23}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Lal Bahadur Shastri Airport (25 km)', rail: 'Varanasi Junction', road: 'Well-connected by national highways' };
highlights = [ {icon:'🕉️',title:'Ganga Aarti',desc:'Evening ritual on Dashashwamedh Ghat'}, {icon:'🚣',title:'Boat Rides',desc:'Sunrise cruises on the Ganges'} ];
nearby = [{name:'Kashi Vishwanath Temple',img:'assets/images/kashi-vishwanath.webp',desc:'Major Hindu temple'},{name:'Sarnath',img:'assets/images/sarnath.webp',desc:'Buddhist pilgrimage site nearby'}];
}