import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Attraction {
  name: string;
  description: string;
  imageUrl: string;
}

interface Destination {
  name: string;
  heroImageUrl: string;
  quickSummary: string;
  bestSeason: string;
  currency: string;
  costLevel: string;
  airportCode: string;
  rating: number;
  reviewCount: number;
  attractions: Attraction[];
}

@Component({
  selector: 'app-destination-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination.html',
  styleUrls: ['./destination.css']
})
export class DestinationGuideComponent implements OnInit {
  destination: Destination = {
    name: 'Rome, Italy',
    heroImageUrl: 'https://www.italia.it/content/dam/tdh/en/interests/lazio/roma/roma-in-48-ore/media/20220127150143-colosseo-roma-lazio-shutterstock-756032350.jpg',
    quickSummary: 'A mesmerizing blend of ancient history, vibrant culture, and unparalleled cuisine. Rome is a journey through time itself.',
    bestSeason: 'Spring (Apr–May)',
    currency: 'Euro (€)',
    costLevel: '€€€',
    airportCode: 'FCO',
    rating: 4.8,
    reviewCount: 1540,
    attractions: [
      { name: 'Colosseum', description: 'The ancient arena where gladiators once fought.', imageUrl: 'https://plus.unsplash.com/premium_photo-1661963952208-2db3512ef3de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1244' },
      { name: 'Trevi Fountain', description: 'Toss a coin to ensure your return to Rome.', imageUrl: 'https://images.unsplash.com/photo-1596627116790-af6f46dddbda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170' },
      { name: 'Vatican City', description: 'The heart of the Catholic Church and home to St. Peter’s Basilica.', imageUrl: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176' },
      { name: 'Pantheon', description: 'An ancient temple turned church, remarkably preserved.', imageUrl: 'https://plus.unsplash.com/premium_photo-1661962912126-2e72429a3f1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170' },
    ]
  };

  ngOnInit(): void {}

  searchFlights(): void {
    const query = encodeURIComponent(`flights to ${this.destination.name}`);
    window.open(`https://www.google.com/travel/flights?q=${query}`, '_blank');
  }

  findHotels(): void {
    const query = encodeURIComponent(`hotels in ${this.destination.name}`);
    window.open(`https://www.google.com/travel/hotels?q=${query}`, '_blank');
  }

  openTransitGuide(): void {
    const query = encodeURIComponent(`${this.destination.name} public transport guide`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  }

  saveToWishlist(): void {
    alert(`${this.destination.name} added to your wishlist ❤️`);
  }

  viewAllActivities(): void {
    const query = encodeURIComponent(`things to do in ${this.destination.name}`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  }
}
