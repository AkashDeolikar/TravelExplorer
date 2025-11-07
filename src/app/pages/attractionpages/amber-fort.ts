import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-amber-fort',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class AmberFortComponent {
title = 'Amber Fort';
location = 'Amer (Jaipur), Rajasthan';
heroImage = 'https://images.unsplash.com/photo-1649073868642-bcbbd06239d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1026';
overview = `Hilltop fort-palace combining Rajput and Mughal architecture with courtyards, halls and mirror work.`;
history = `Built by Raja Man Singh in the 16th century, Amber Fort was the ancient capital of the Kachhwaha Rajputs.`;
weatherSummary = { condition: 'Arid, hot summers', bestTime: 'October – March' };
monthlyWeather = [ {month:'Jan',min:8,max:22},{month:'Feb',min:10,max:25},{month:'Mar',min:14,max:30},{month:'Apr',min:19,max:35},{month:'May',min:23,max:40},{month:'Jun',min:25,max:42},{month:'Jul',min:24,max:38},{month:'Aug',min:24,max:35},{month:'Sep',min:23,max:36},{month:'Oct',min:19,max:34},{month:'Nov',min:12,max:28},{month:'Dec',min:9,max:24}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Jaipur International Airport (25 km)', rail: 'Jaipur Junction', road: 'Accessible via NH48 and local roads' };
highlights = [ {icon:'🏰',title:'Palace Complex',desc:'Sheesh Mahal and Diwan-i-Aam'}, {icon:'🐘',title:'Elephant Rides',desc:'Traditional fort approach (seasonal)'} ];
nearby = [{name:'Jaigarh Fort',img:'assets/images/jaigarh.webp',desc:'Cannon & fortifications'},{name:'Jal Mahal',img:'assets/images/jal-mahal.webp',desc:'Palace in water'}];
}