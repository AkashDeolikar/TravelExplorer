import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Place {
  name: string;
  image: string;
  desc: string;
  link: string;
}

@Component({
  selector: 'app-explore-west',
  standalone: true,
  templateUrl: './explorewest.html',
  styleUrls: ['./explorewest.css'],
  imports: [CommonModule, RouterLink] 
})
export class ExploreWestComponent implements OnInit{
  places: Place[]  = [
    { name: 'Jaipur', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'The Pink City, famous for forts and palaces.', link: 'https://en.wikipedia.org/wiki/Mumbai' },
    { name: 'Goa', image: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Famous for beaches, nightlife, and Portuguese heritage.', link: 'https://en.wikipedia.org/wiki/Mumbai' },
    { name: 'Rann of Kutch', image: 'https://images.unsplash.com/photo-1669015881702-951de590db31?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Salt desert with cultural festivals in Gujarat.', link: 'https://en.wikipedia.org/wiki/Mumbai' },
    { name: 'Mumbai', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3', desc: 'Financial capital with a vibrant city life.', link: 'https://en.wikipedia.org/wiki/Mumbai' }
  ];

  ngOnInit(): void {
    
  }
}
