import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-qutub-minar',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class QutubMinarComponent {
title = 'Qutub Minar';
location = 'Mehrauli, Delhi';
heroImage = 'https://plus.unsplash.com/premium_photo-1697729438410-d53c666e3810?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687';
overview = `Tall tapering minaret built in 1192, surrounded by a complex of medieval monuments and ruins.`;
history = `Started by Qutb-ud-din Aibak and completed by Iltutmish; UNESCO World Heritage Site.`;
weatherSummary = { condition: 'Hot summers, mild winters', bestTime: 'October – March' };
monthlyWeather = [ {month:'Jan',min:7,max:20},{month:'Feb',min:10,max:24},{month:'Mar',min:15,max:30},{month:'Apr',min:21,max:36},{month:'May',min:26,max:40},{month:'Jun',min:28,max:39},{month:'Jul',min:27,max:35},{month:'Aug',min:26,max:34},{month:'Sep',min:25,max:34},{month:'Oct',min:20,max:33},{month:'Nov',min:13,max:28},{month:'Dec',min:8,max:22}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Indira Gandhi International Airport (18 km)', rail: 'New Delhi/Delhi Junctions', road: 'Accessible via city metro and roads' };
highlights = [ {icon:'🗼',title:'Historic Minaret',desc:'Finely carved Indo-Islamic architecture'}, {icon:'🏛️',title:'Archaeological Park',desc:'Ruins and ancient monuments'} ];
nearby = [{name:'Iron Pillar',img:'assets/images/iron-pillar.webp',desc:'Rust-resistant pillar'},{name:'Alai Darwaza',img:'assets/images/alai-darwaza.webp',desc:'Islamic gateway'}];
}