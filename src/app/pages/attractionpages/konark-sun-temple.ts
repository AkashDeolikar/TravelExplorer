import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-konark-sun-temple',
standalone: true,
imports: [CommonModule],
templateUrl: './landmark.html',
styleUrls: ['./landmark.css']
})
export class KonarkSunTempleComponent {
title = 'Konark Sun Temple';
location = 'Konark, Odisha';
heroImage = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd-1SR70fnpyB1HAurZufepHXm_k2KjLnULGo02lkAop5FmodjfuBk1e4-kR7qDC65aFrVPYR7c5F0Ks7FsaKmZON2nApJnWN7l9QbZhD4Y-uullJo3OFYCtsxZYnZ3A6o6nqrZEUW7zrCjW-JDmx0I2y-oYhGcDlJ9NYUo0z53VLH6qqgZLZj0IQcSDY/s1600/5fbc42a6-014c-43af-89e4-64ec9e5a8d75.jpg';
overview = `13th-century temple carved like a colossal chariot dedicated to the Sun God.`;
history = `A UNESCO World Heritage Site famous for intricate stone carvings and architectural symbolism.`;
weatherSummary = { condition: 'Coastal tropical', bestTime: 'October – March' };
monthlyWeather = [ {month:'Jan',min:16,max:28},{month:'Feb',min:18,max:30},{month:'Mar',min:22,max:34},{month:'Apr',min:25,max:37},{month:'May',min:26,max:36},{month:'Jun',min:26,max:34},{month:'Jul',min:25,max:31},{month:'Aug',min:25,max:30},{month:'Sep',min:25,max:30},{month:'Oct',min:24,max:31},{month:'Nov',min:20,max:30},{month:'Dec',min:17,max:29}];
getMinTemp(){return Math.min(...this.monthlyWeather.map(m=>m.min));}
getMaxTemp(){return Math.max(...this.monthlyWeather.map(m=>m.max));}
transport = { air: 'Biju Patnaik International Airport (Bhubaneswar, 65 km)', rail: 'Puri/Konark nearby stations', road: 'Accessible via NH routes and local roads' };
highlights = [ {icon:'🏛️',title:'Stone Carvings',desc:'Elaborate sculptures and friezes'}, {icon:'🌅',title:'Seaside Setting',desc:'Temples by the coast'} ];
nearby = [{name:'Chandrabhaga Beach',img:'assets/images/chandrabhaga.webp',desc:'Beach near the temple'},{name:'Puri Jagannath Temple',img:'assets/images/puri.webp',desc:'Major pilgrimage site nearby'}];
}