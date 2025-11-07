// exploreeast.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Define a clear interface for the place data
interface Place {
  name: string;
  image: string;
  desc: string;
  link: string; // Link for navigation
}

@Component({
  selector: 'app-explore-east',
  standalone: true,
  templateUrl: './exploreeast.html',
  styleUrls: ['./exploreeast.css'],
  imports: [CommonModule, RouterLink]
})
export class ExploreEastComponent implements OnInit {

  // Data for East India destinations
  places: Place[] = [
    { name: 'Kolkata', image: 'https://images.unsplash.com/photo-1647102208648-5f3175091dda?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'The cultural capital, famous for Durga Puja, architecture, and colonial charm.', link: '/destinations/kolkata' },
    { name: 'Puri', image: 'https://odishadairy.wordpress.com/wp-content/uploads/2015/07/jagannath-03.jpg', desc: 'Famous for the Jagannath Temple and serene beaches in Odisha.' , link: '/destinations/kolkata'},
    { name: 'Darjeeling', image: 'https://images.unsplash.com/photo-1622308644420-b20142dc993c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Known for tea gardens, Himalayan views, and the toy train.', link: '/destinations/kolkata' },
    { name: 'Kaziranga', image: 'https://images.unsplash.com/photo-1709008502198-c211e259f532?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Home to the famous one-horned rhinoceros in Assam.' , link: '/destinations/kolkata'}
  ];

  ngOnInit(): void {
    // Logic to fetch data from a service would go here
  }
}
