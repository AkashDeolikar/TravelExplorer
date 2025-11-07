import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports: [CommonModule, RouterModule],
})
export class AboutComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // ✅ Only run in the browser (not on server)
    if (isPlatformBrowser(this.platformId)) {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          },
          { threshold: 0.2 }
        );

        document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
      } else {
        // Fallback for very old browsers
        document.querySelectorAll('.fade-in').forEach((el) => el.classList.add('visible'));
      }
    }
  }
}
