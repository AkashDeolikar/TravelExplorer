import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  ElementRef,
  NgZone,
  HostListener
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-kanthalloor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanthalloor.html',
  styleUrls: ['./kanthalloor.css']
})
export class KanthalloorComponent implements OnInit, AfterViewInit {
  title = 'Kanthalloor Village, Kerala';
  subtitle = 'The Kashmir of the South — calm, lush, and timeless';
  heroImage =
    'https://images.unsplash.com/photo-1630680373755-6910ac0d825e?auto=format&fit=crop&q=80&w=1920';

  quickFacts = [
    { k: 'State', v: 'Kerala' },
    { k: 'District', v: 'Idukki' },
    { k: 'Award', v: 'Best Rural Tourism Village 2023' }
  ];

  highlights = [
    { icon: '🍎', title: 'Fruit Orchards', desc: 'Apples, plums, and peaches thriving amidst misty hills.' },
    { icon: '🌿', title: 'Sandalwood Trails', desc: 'Fragrant groves meet prehistoric dolmens and megaliths.' },
    { icon: '🌱', title: 'Sustainable Living', desc: 'A women-led community built on eco-conscious tourism.' }
  ];

  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const sections = this.el.nativeElement.querySelectorAll('.observe');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.ngZone.run(() => entry.target.classList.add('visible'));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((section: HTMLElement) => observer.observe(section));
  }

  ngAfterViewInit() {}

  // Smooth parallax effect
  @HostListener('window:scroll', [])
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    const heroImg = this.el.nativeElement.querySelector('.hero-image');
    if (heroImg) {
      const offset = window.scrollY * 0.25;
      heroImg.style.transform = `translateY(${offset}px) scale(1.08)`;
    }
  }
}
