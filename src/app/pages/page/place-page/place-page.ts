import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PLACESDATA } from '../../../../placesdata';
import { HeroComponent } from '../../hero/hero';
import { Info } from '../../info/info';
import { Gallery } from '../../gallery/gallery';
import { FooterComponent } from '../../allindia/footer/footer';

@Component({
  selector: 'app-place-page',
  standalone: true,
  imports: [CommonModule, HeroComponent, Info, Gallery],
  templateUrl: './place-page.html',
  styleUrls: ['./place-page.css']
})
export class PlacePageComponent {
  place: any;

  constructor(private route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('id'); // /place/:id
    if (slug && PLACESDATA[slug]) {
      this.place = PLACESDATA[slug];
    } else {
      console.warn('⚠️ Unknown place slug:', slug);
    }
  }
}

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { HeroComponent } from '../../hero/hero';
// import { Info } from '../../info/info';
// import { Gallery } from '../../gallery/gallery';

// @Component({
//   selector: 'app-place-page',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HttpClientModule,
//     HeroComponent,
//     Info,
//     Gallery
//   ],
//   templateUrl: './place-page.html',
//   styleUrls: ['./place-page.css']
// })
// export class PlacePageComponent implements OnInit {
//   place: any;
//   slug: string | null = null;
//   loading = true; // Optional loading indicator

//   constructor(private route: ActivatedRoute, private http: HttpClient) {}

//   ngOnInit() {
//     this.slug = this.route.snapshot.paramMap.get('id'); // /place/:id

//     this.http.get<any[]>('assets/data/places.json').subscribe({
//       next: (places) => {
//         if (!this.slug) return;
//         const found = places.find((p) => p.slug === this.slug);
//         if (found) {
//           this.place = found;
//         } else {
//           console.warn('⚠️ Unknown place slug:', this.slug);
//         }
//         this.loading = false;
//       },
//       error: (err) => {
//         console.error('❌ Failed to load places.json', err);
//         this.loading = false;
//       }
//     });
//   }
// }
