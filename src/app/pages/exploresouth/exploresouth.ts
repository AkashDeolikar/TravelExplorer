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
  selector: 'app-explore-south',
  standalone: true,
  templateUrl: './exploresouth.html',
  styleUrls: ['./exploresouth.css'],
  imports: [CommonModule, RouterLink]
})
export class ExploreSouthComponent implements OnInit {
  places: Place[] = [
    {
      name: 'Kerala Backwaters',
      image: 'https://c.ndtvimg.com/2025-08/tv011i6g_kerala-backwaters_625x300_18_August_25.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=738',
      desc: 'Serene houseboats and lush canals in God’s own country.',
      link: 'https://en.wikipedia.org/wiki/Backwaters_of_Kerala'
    },
    {
      name: 'Hampi',
      image: 'https://plus.unsplash.com/premium_photo-1697730337612-8bd916249e30?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: 'Ruins of Vijayanagara Empire, a UNESCO World Heritage site.',
      link: 'https://en.wikipedia.org/wiki/Hampi'
    },
    {
      name: 'Mysore',
      image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=1299&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: 'City of palaces and rich culture in Karnataka.',
      link: 'https://en.wikipedia.org/wiki/Mysore'
    },
    {
      name: 'Madurai',
      image: 'https://images.unsplash.com/photo-1692173248120-59547c3d4653?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: 'Famous Meenakshi Temple and Tamil culture.',
      link: 'https://en.wikipedia.org/wiki/Madurai'
    }
  ];

  ngOnInit(): void {
    //fetch data here
  }
}
