import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-charminar',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class CharminarComponent {
title = 'Charminar';
location = 'Hyderabad, Telangana';
heroImage = 'https://s7ap1.scene7.com/is/image/incredibleindia/charminar-hyderabad-1-attr-hero?qlt=82&ts=1742179190787';
overview = `The iconic 16th-century mosque and monument at the heart of Hyderabad’s old city.`;
history = `Built in 1591 by Muhammad Quli Qutb Shah, Charminar is a symbol of Hyderabad's rich past.`;
weatherSummary = { condition: 'Hot summers, mild winters', bestTime: 'October – March' };
monthlyWeather = [ {month:'Jan',min:14,max:30},{month:'Feb',min:17,max:33},{month:'Mar',min:21,max:36},{month:'Apr',min:25,max:39},{month:'May',min:27,max:40},{month:'Jun',min:26,max:37},{month:'Jul',min:24,max:33},{month:'Aug',min:24,max:32},{month:'Sep',min:24,max:33},{month:'Oct',min:22,max:33},{month:'Nov',min:18,max:31},{month:'Dec',min:15,max:30}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Rajiv Gandhi International Airport (20 km)', rail: 'Hyderabad Deccan/Hyderabad Nampally', road: 'Well-connected city roads and metro' };
highlights = [ {icon:'🕌',title:'Historic Monument',desc:'Four grand arches and minarets'}, {icon:'🛍️',title:'Laad Bazaar',desc:'Famous for bangles & pearls'} ];
nearby = [{name:'Mecca Masjid',img:'assets/images/mecca-masjid.webp',desc:'Historic mosque'},{name:'Laad Bazaar',img:'assets/images/laad-bazaar.webp',desc:'Shopping district'}];
}