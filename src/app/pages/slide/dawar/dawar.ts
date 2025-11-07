import {
  Component,
  OnInit,
  ElementRef,
  Inject,
  PLATFORM_ID,
  NgZone,
  HostListener,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-dawar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dawar.html',
  styleUrls: ['./dawar.css'],
  animations: [
    trigger('fadeReveal', [
      state('hide', style({ opacity: 0, transform: 'translateY(80px)' })),
      state('show', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hide => show', animate('1.2s cubic-bezier(0.25, 0.8, 0.25, 1)')),
    ]),
  ],
})
export class DawarComponent implements OnInit {
  aboutVisible = false;
  climateVisible = false;
  travelVisible = false;
  nearbyVisible = false;

  months = [
    { n: 'Jan', t: '-6 – 12°C' }, { n: 'Feb', t: '-4 – 15°C' },
    { n: 'Mar', t: '0 – 21°C' }, { n: 'Apr', t: '4 – 26°C' },
    { n: 'May', t: '8 – 31°C' }, { n: 'Jun', t: '12 – 34°C' },
    { n: 'Jul', t: '14 – 34°C' }, { n: 'Aug', t: '13 – 33°C' },
    { n: 'Sep', t: '8 – 30°C' }, { n: 'Oct', t: '2 – 27°C' },
    { n: 'Nov', t: '-3 – 21°C' }, { n: 'Dec', t: '-6 – 14°C' },
  ];

  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.ngZone.run(() => {
            const c = entry.target.classList;
            if (c.contains('about')) this.aboutVisible = true;
            if (c.contains('weather')) this.climateVisible = true;
            if (c.contains('travel')) this.travelVisible = true;
            if (c.contains('nearby')) this.nearbyVisible = true;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    this.el.nativeElement.querySelectorAll('.section').forEach((sec: HTMLElement) => observer.observe(sec));
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    const scrollY = window.scrollY || 0;
    const bg = this.el.nativeElement.querySelector('.hero-bg');
    const grad = this.el.nativeElement.querySelector('.hero-gradient');

    if (bg) bg.style.transform = `translateY(${scrollY * 0.25}px) scale(1.12)`;
    if (grad) grad.style.opacity = `${Math.max(0.4, 1 - scrollY / 800)}`;
  }

  scrollToSection(id: string) {
    const section = this.el.nativeElement.querySelector(`#${id}`);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }
}
