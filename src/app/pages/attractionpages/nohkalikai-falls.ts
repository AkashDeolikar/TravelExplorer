import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-nohkalikai-falls',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './landmark.html',
    styleUrls: ['./landmark.css']
})
export class NohkalikaiFallsComponent {
    title = 'Nohkalikai Falls';
    location = 'Cherrapunji, Meghalaya';
    heroImage = 'https://storage.googleapis.com/stateless-www-justwravel-com/2025/09/3249c958-57.jpg';
    overview = `Nohkalikai Falls, one of India\'s tallest plunge waterfalls, drops dramatically into a deep chasm near Cherrapunji.`;
    history = `Named after the local legend of Likai, the falls are surrounded by cloud forests and steep cliffs.`;
    weatherSummary = { condition: 'Cool & rainy', bestTime: 'Sep – Apr' };
    monthlyWeather = [{ month: 'Jan', min: 8, max: 16 }, { month: 'Feb', min: 9, max: 17 }, { month: 'Mar', min: 11, max: 19 }, { month: 'Apr', min: 13, max: 21 }, { month: 'May', min: 14, max: 22 }, { month: 'Jun', min: 16, max: 20 }, { month: 'Jul', min: 15, max: 19 }, { month: 'Aug', min: 15, max: 19 }, { month: 'Sep', min: 14, max: 20 }, { month: 'Oct', min: 13, max: 20 }, { month: 'Nov', min: 10, max: 18 }, { month: 'Dec', min: 8, max: 16 }];
    getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
    getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }
    transport = { air: 'Shillong Airport (~90 km)', rail: 'Guwahati (150 km)', road: 'Road access via Shillong' };
    highlights = [{ icon: '🌊', title: 'Waterfall', desc: 'Spectacular plunge waterfall' }, { icon: '📷', title: 'Viewpoints', desc: 'Multiple scenic viewpoints' }];
    nearby = [{ name: 'Mawsmai Cave', img: 'assets/images/mawsmai-cave.webp', desc: 'Limestone cave near Cherrapunji' }];
}