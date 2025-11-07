import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-red-fort',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './landmark.html',
    styleUrls: ['./landmark.css']
})
export class DelhiAttractComponent {
    title = 'Red Fort (Lal Qila)';
    location = 'Delhi, India';
    heroImage = 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170';

    overview = `
    The Red Fort, an enduring symbol of India's independence and Mughal grandeur,
    stands proudly in Old Delhi. Built by Emperor Shah Jahan in 1639,
    this UNESCO World Heritage Site showcases the brilliance of Mughal craftsmanship.
  `;

    history = `
    Completed in 1648, the Red Fort was the Mughal emperors’ primary residence for nearly 200 years.
    It became a silent witness to India’s transition through empire, colonialism, and independence.
    Today, it remains a focal point of national pride, where the Prime Minister hoists the flag every Independence Day.
  `;

    weatherSummary = {
        condition: 'Pleasant Winters, Hot Summers',
        bestTime: 'October – March'
    };

    monthlyWeather = [
        { month: 'Jan', min: 7, max: 20 },
        { month: 'Feb', min: 10, max: 24 },
        { month: 'Mar', min: 15, max: 30 },
        { month: 'Apr', min: 21, max: 36 },
        { month: 'May', min: 26, max: 40 },
        { month: 'Jun', min: 28, max: 39 },
        { month: 'Jul', min: 27, max: 35 },
        { month: 'Aug', min: 26, max: 34 },
        { month: 'Sep', min: 25, max: 34 },
        { month: 'Oct', min: 20, max: 33 },
        { month: 'Nov', min: 13, max: 28 },
        { month: 'Dec', min: 8, max: 22 },
    ];
    getMinTemp() {
        return Math.min(...this.monthlyWeather.map(m => m.min));
    }

    getMaxTemp() {
        return Math.max(...this.monthlyWeather.map(m => m.max));
    }


    transport = {
        air: 'Indira Gandhi International Airport (20 km away) offers excellent global connectivity.',
        rail: 'Old Delhi (2 km) and New Delhi (4 km) railway stations serve most major cities.',
        road: 'NH 44 and NH 9 connect Delhi seamlessly with surrounding regions via road and metro.'
    };

    highlights = [
        { icon: '🏰', title: 'Architectural Marvel', desc: 'Red sandstone walls and intricate Mughal craftsmanship.' },
        { icon: '🎆', title: 'Light & Sound Show', desc: 'A nightly spectacle narrating Delhi’s royal past.' },
        { icon: '🕰️', title: 'Visitor Info', desc: 'Open 9:30 AM – 4:30 PM • Closed on Mondays.' },
        { icon: '💰', title: 'Entry Fee', desc: '₹35 (Indian) • ₹500 (Foreign National)' }
    ];

    nearby = [
        {
            name: 'Jama Masjid',
            img: 'assets/images/jama-masjid.webp',
            desc: 'One of India’s largest mosques, built by Shah Jahan in 1656.'
        },
        {
            name: 'Chandni Chowk',
            img: 'assets/images/chandni-chowk.webp',
            desc: 'Historic marketplace buzzing with food, spices, and culture.'
        },
        {
            name: 'Raj Ghat',
            img: 'assets/images/raj-ghat.webp',
            desc: 'Serene memorial dedicated to Mahatma Gandhi.'
        }
    ];
}
