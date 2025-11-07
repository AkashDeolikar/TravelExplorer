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

@Component({
  selector: 'app-khajjiar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './khajjiar.html',
  styleUrls: ['./khajjiar.css'],
})
export class KhajjiarComponent implements OnInit {
  title = 'Khajjiar, Himachal Pradesh';
  subtitle = '“Mini Switzerland of India” — a paradise of meadows, forests, and serenity';
  heroImage =
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80';

  quickFacts = [
    { k: 'State', v: 'Himachal Pradesh' },
    { k: 'District', v: 'Chamba' },
    { k: 'Elevation', v: '1,920 m above sea level' },
    { k: 'Nickname', v: 'Mini Switzerland of India' },
  ];

  highlights = [
    {
      icon: '🌲',
      title: 'Alpine Meadows',
      desc: 'Verdant meadows bordered by dense cedar forests — Khajjiar’s most iconic view.',
    },
    {
      icon: '🏞️',
      title: 'Khajjiar Lake',
      desc: 'A small floating island in a shallow lake, adding to the valley’s mystical charm.',
    },
    {
      icon: '🏔️',
      title: 'Views of Dhauladhar Range',
      desc: 'Snow peaks form a magnificent backdrop, visible on clear days.',
    },
    {
      icon: '⛪',
      title: 'Colonial Charm',
      desc: 'Nearby Dalhousie and Chamba reflect European-era architecture and tranquility.',
    },
  ];

  galleryImages = [
    'https://images.unsplash.com/photo-1600491001617-36f4e8005cc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736',
    'https://images.unsplash.com/photo-1621325483822-342f76ed07c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    'https://blog.ecohospitality.in/wp-content/uploads/2024/07/Khajjiar-Lake-1.jpg',
    'https://media.assettype.com/outlooktraveller%2F2024-05%2F3ad18135-6a6b-49f2-9340-504f3b6f9369%2Fshutterstock_1232199547.jpeg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100',
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
