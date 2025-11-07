// explorenorth.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Import RouterLink for navigation

// Define a clear interface for the place data
interface Place {
  name: string;
  image: string;
  desc: string;
  link: string; // Add a link for the detail page
}

@Component({
  selector: 'app-explore-north',
  standalone: true,
  templateUrl: './explorenorth.html',
  styleUrls: ['./explorenorth.css'],
  imports: [CommonModule, RouterLink] // Include RouterLink in imports
})
export class ExploreNorthComponent implements OnInit {
  places: Place[] = [
    { name: 'Manali', image: 'https://storage.googleapis.com/stateless-www-justwravel-com/2024/09/dd5f41a7-places-to-visit-in-manali-.png', desc: 'A paradise for adventure lovers in Himachal Pradesh, famous for its scenic beauty and adventure sports.', link: 'https://en.wikipedia.org/wiki/Manali,_Himachal_Pradesh' },
    { name: 'Amritsar', image: 'https://www.incredibleindia.gov.in/content/dam/incredible-india/images/trips/punjab/amritsar/6-days-trip/golden-temple-amritsar-punjab-tri-iter-day1.jpg', desc: 'Home to the Golden Temple, a spiritual heart of Punjab, showcasing history and serene architecture.', link: 'https://en.wikipedia.org/wiki/Amritsar' },
    { name: 'Jaipur', image: 'https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1742200253577', desc: 'The Pink City known for royal forts, vibrant culture, and stunning Rajput architecture.', link: 'https://en.wikipedia.org/wiki/Jaipur' },
    { name: 'Rishikesh', image: 'https://s7ap1.scene7.com/is/image/incredibleindia/1-triveni-ghat-rishikesh-uttarakhand-2-city-hero?qlt=82&ts=1726646286991', desc: 'The Yoga capital of the world, offering spiritual retreats and white-water rafting on the banks of the Ganga.', link: '/destinations/rishikesh' }
  ];

  ngOnInit(): void {
    // Initialization logic (e.g., fetch data here)
  }
}