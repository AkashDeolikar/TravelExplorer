import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  ElementRef,
  NgZone,
  HostListener,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-madla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './madla.html',
  styleUrls: ['./madla.css'],
})
export class MadlaComponent implements OnInit {
  title = 'Madla Village, Madhya Pradesh';
  subtitle = 'A gateway to nature’s calm along the Ken River';
  heroImage =
    'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1600&q=80';

  quickFacts = [
    { k: 'State', v: 'Madhya Pradesh' },
    { k: 'Nearest Airport', v: 'Khajuraho Airport (HJR) — 28 km' },
    { k: 'Recognition', v: 'Gold Category – Best Tourism Village 2023' },
  ];

  highlights = [
    {
      icon: '🌊',
      title: 'Ken River & Nature',
      desc: 'Madla rests peacefully on the banks of the Ken River — surrounded by forested hills and serene plains.',
    },
    {
      icon: '🐅',
      title: 'Gateway to Panna National Park',
      desc: 'An entrance to the famed national park, offering safaris, wildlife and breathtaking waterfalls.',
    },
    {
      icon: '🏛️',
      title: 'Heritage & Culture',
      desc: 'A short drive to Khajuraho’s UNESCO temples; Madla retains Bundelkhand’s art and folk legacy.',
    },
  ];

  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.ngZone.run(() => entry.target.classList.add('visible'));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    this.el.nativeElement
      .querySelectorAll('.observe')
      .forEach((el: HTMLElement) => observer.observe(el));
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    const hero = this.el.nativeElement.querySelector('.hero-image');
    if (hero) {
      const offset = window.scrollY * 0.25;
      hero.style.transform = `translateY(${offset}px) scale(1.05)`;
    }
  }
}
