import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bangaram-island',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmark.html',
  styleUrls: ['./landmark.css']
})
export class BangaramIslandComponent {
  title = 'Bangaram Island';
  location = 'Lakshadweep Islands';
  heroImage = 'https://images.unsplash.com/photo-1649519764815-ec68b9e7c52a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074';

  overview = `
  Bangaram is a small coral atoll in Lakshadweep, known for crystal-clear waters, coral reefs, and pristine beaches —
  ideal for snorkeling, diving, and pure island solitude.
  `;

  history = `
  Part of the Lakshadweep archipelago, Bangaram has been sparsely inhabited and remains a protected marine environment,
  offering limited eco-tourism focused on reef conservation.
  `;

  weatherSummary = { condition: 'Tropical maritime', bestTime: 'October – April' };

  monthlyWeather = [
    { month: 'Jan', min: 24, max: 30 }, { month: 'Feb', min: 25, max: 31 },
    { month: 'Mar', min: 26, max: 32 }, { month: 'Apr', min: 27, max: 33 },
    { month: 'May', min: 27, max: 33 }, { month: 'Jun', min: 26, max: 31 },
    { month: 'Jul', min: 26, max: 30 }, { month: 'Aug', min: 26, max: 30 },
    { month: 'Sep', min: 26, max: 30 }, { month: 'Oct', min: 26, max: 31 },
    { month: 'Nov', min: 25, max: 31 }, { month: 'Dec', min: 24, max: 30 },
  ];
  getMinTemp() { return Math.min(...this.monthlyWeather.map(m => m.min)); }
  getMaxTemp() { return Math.max(...this.monthlyWeather.map(m => m.max)); }

  transport = {
    air: 'Agatti Airport (nearest air link) then boat transfers.',
    rail: 'No railways — island access by sea and air only.',
    road: 'Island transport by boat and local routes.'
  };

  highlights = [
    { icon: '🏝️', title: 'Pristine Beaches', desc: 'Quiet white sand and turquoise water.' },
    { icon: '🤿', title: 'Diving & Snorkel', desc: 'Rich coral reefs and marine life.' },
    { icon: '🌅', title: 'Remote Escape', desc: 'Ideal for honeymooners and nature lovers.' },
    { icon: '🚤', title: 'Boat Access', desc: 'Transfers from Agatti or Kavaratti.' }
  ];

  nearby = [
    { name: 'Agatti Island', img: 'assets/images/agatti.webp', desc: 'Gateway island with airport and resorts.' },
    { name: 'Kavaratti', img: 'assets/images/kavaratti.webp', desc: 'Administrative center with lagoons.' },
    { name: 'Kalpeni', img: 'assets/images/kalpeni.webp', desc: 'Coral islets and local culture.' }
  ];
}