import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-gateway-of-india',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class GatewayOfIndiaComponent {
title = 'Gateway of India';
location = 'Mumbai, Maharashtra';
heroImage = 'https://images.unsplash.com/photo-1697198378724-5375bc920eaf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074';
overview = `An arch-monument built during the British Raj, overlooking the Arabian Sea.`;
history = `Completed in 1924, it commemorates the visit of King George V and Queen Mary to Mumbai.`;
weatherSummary = { condition: 'Humid coastal', bestTime: 'November – February' };
monthlyWeather = [ {month:'Jan',min:16,max:30},{month:'Feb',min:18,max:33},{month:'Mar',min:22,max:34},{month:'Apr',min:25,max:35},{month:'May',min:26,max:34},{month:'Jun',min:26,max:32},{month:'Jul',min:25,max:30},{month:'Aug',min:25,max:30},{month:'Sep',min:25,max:31},{month:'Oct',min:24,max:32},{month:'Nov',min:21,max:31},{month:'Dec',min:18,max:30}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Chhatrapati Shivaji Maharaj International Airport (25 km)', rail: 'Chhatrapati Shivaji Terminus', road: 'Accessible by Mumbai local trains and taxis' };
highlights = [ {icon:'🏛️',title:'Colonial Landmark',desc:'Seafront arch and promenade'}, {icon:'🚤',title:'Boat Rides',desc:'Ferry services to Elephanta Caves'} ];
nearby = [{name:'Colaba Causeway',img:'assets/images/colaba-causeway.webp',desc:'Shopping & cafés'},{name:'Elephanta Caves',img:'assets/images/elephanta.webp',desc:'Historic cave temples (boat ride)'}];
}