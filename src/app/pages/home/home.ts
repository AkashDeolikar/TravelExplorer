import {
  Component,
  OnInit,
  AfterViewInit,
  HostListener,
  NgZone,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Hero } from '../../components/hero/hero';
import { ExploreComponent } from '../../components/explore/explore';
import { PLACESDATA } from '../../../placesdata';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, Hero, ExploreComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(40px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('900ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  aboutVisible = false;
  parallaxOffset = 0;

  // 🔹 Uncover India Carousel
  private activeIndex = 0;
  private autoSlide: any;
  private cards: HTMLElement[] = [];
  private carousel!: HTMLElement;
  private prevButton!: HTMLElement;
  private nextButton!: HTMLElement;
  private autoSlideDelay = 5000;

  // 🔹 Crafts Carousel
  private craftsCarousel!: HTMLElement;
  private craftsPrevButton!: HTMLElement;
  private craftsNextButton!: HTMLElement;

  // 🔹 Attractions Carousel
  private attractionsCarousel!: HTMLElement;
  private attractionsPrevButton!: HTMLElement;
  private attractionsNextButton!: HTMLElement;

  // 🔹 Destination Carousel (Apple-style)
  private destinationCarousel!: HTMLElement;
  private destinationPrevButton!: HTMLElement;
  private destinationNextButton!: HTMLElement;
  private autoDestinationSlide: any;
  private destinationDelay = 8000;

  // 
  showModal = false;
  redirectUrl = '';
  targetSite = '';
  targetLogo = '';

  // Define logos per site
  logos: Record<string, string> = {
    Flights: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/MakeMyTrip_Logo.svg',
    Trains: 'https://upload.wikimedia.org/wikipedia/en/2/28/IRCTC_Logo.svg',
    Buses: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Redbus_logo.svg',
    Cabs: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Ola_Cabs_logo.svg',
    Hotels: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Booking.com_logo.svg'
  };

  openRedirect(site: string, url: string) {
    this.showModal = true;
    this.redirectUrl = url;
    this.targetSite = site;
    this.targetLogo = this.logos[site];
  }

  confirmRedirect() {
    window.open(this.redirectUrl, '_blank');
    this.showModal = false;
  }

  closeModal() {
    this.showModal = false;
  }

  // 
  showMore = false;
  featuredPlaces: any[] = [];

  constructor(
    private ngZone: NgZone,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.initPlaces();
    }
  }

  private initPlaces() {
    this.featuredPlaces = Object.keys(PLACESDATA).map((key) => ({
      slug: key,
      ...(PLACESDATA as any)[key]
    }));
  }

  toggleMore() {
    this.showMore = !this.showMore;
  }


  // 🎥 Background video setup
  @ViewChild('backgroundVideo') backgroundVideo!: ElementRef<HTMLVideoElement>;

  videos: Record<string, string> = {
    India360: 'vid/India-360-v2.mp4',
    Adventure: 'vid/Adventure.mp4',
    Wildlife: 'vid/Wildlife.mp4',
    Nature: 'vid/Nature.mp4',
    Heritage: 'vid/Heritage.mp4',
    Spiritual: 'vid/Spiritual.mp4',
  };

  currentVideoKey: string = 'India360';
  currentVideoUrl: string = this.videos[this.currentVideoKey];
  isMuted: boolean = true;

  getCategories(): string[] {
    return Object.keys(this.videos);
  }

  changeVideo(category: string): void {
    if (this.videos[category]) {
      this.currentVideoKey = category;
      this.currentVideoUrl = this.videos[category];

      const videoElement = document.querySelector<HTMLVideoElement>('.background-video');
      if (videoElement) {
        videoElement.classList.remove('fade-in');
        void videoElement.offsetWidth;
        videoElement.classList.add('fade-in');
      }
    }
  }

  toggleMute(): void {
    if (!this.backgroundVideo) return;
    const videoEl = this.backgroundVideo.nativeElement;
    this.isMuted = !this.isMuted;
    videoEl.muted = this.isMuted;
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.enableHorizontalScroll();
    this.initUncoverIndiaCarousel();
    this.initCraftsCarousel();
    this.initAttractionsCarousel();
    this.initDestinationCarousel(); // 🧭 Apple-style destination slider

    // 🌟 Fade-in on scroll — supports vertical & horizontal scroll


    const fadeEls = this.el.nativeElement.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // uses viewport by default
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    fadeEls.forEach((el: Element) => observer.observe(el));

    // 
    if (typeof window !== 'undefined') {
      const fadeEls = document.querySelectorAll('.fade-in');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { root: document.querySelector('.crafts-scroll'), threshold: 0.3 }
      );

      fadeEls.forEach((el) => observer.observe(el));
    }
  }


  /** 🧭 Enable horizontal scrolling for mouse wheel (Apple-style) */
  private enableHorizontalScroll() {
    const scrollContainers = this.el.nativeElement.querySelectorAll('.horizontal-scroll');
    scrollContainers.forEach((container: HTMLElement) => {
      container.addEventListener('wheel', (event: WheelEvent) => {
        if (event.deltaY === 0) return;
        event.preventDefault();
        container.scrollBy({
          left: event.deltaY < 0 ? -120 : 120,
          behavior: 'smooth',
        });
      });
    });
  }

  /** 🇮🇳 Uncover India carousel */
  private initUncoverIndiaCarousel() {
    this.carousel = this.el.nativeElement.querySelector('#carousel');
    this.cards = Array.from(this.carousel?.children || []) as HTMLElement[];
    this.prevButton = this.el.nativeElement.querySelector('#prev');
    this.nextButton = this.el.nativeElement.querySelector('#next');

    if (this.carousel && this.cards.length && this.prevButton && this.nextButton) {
      const updateCarousel = () => {
        const containerWidth = this.carousel.parentElement!.clientWidth;
        const activeCard = this.cards[this.activeIndex];
        const offset =
          activeCard.offsetLeft + activeCard.offsetWidth / 2 - containerWidth / 2;
        this.carousel.style.transform = `translateX(${-offset}px)`;
      };

      const slideNext = () => {
        this.activeIndex = (this.activeIndex + 1) % this.cards.length;
        updateCarousel();
      };

      const slidePrev = () => {
        this.activeIndex = (this.activeIndex - 1 + this.cards.length) % this.cards.length;
        updateCarousel();
      };

      const startAutoSlide = () => {
        clearInterval(this.autoSlide);
        this.autoSlide = setInterval(slideNext, this.autoSlideDelay);
      };

      this.nextButton.addEventListener('click', () => {
        slideNext();
        startAutoSlide();
      });

      this.prevButton.addEventListener('click', () => {
        slidePrev();
        startAutoSlide();
      });

      window.addEventListener('resize', updateCarousel);
      updateCarousel();
      startAutoSlide();
    }
  }

  /** 🎨 Crafts carousel */
  private initCraftsCarousel() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.craftsCarousel = this.el.nativeElement.querySelector('#crafts-carousel-track');
    this.craftsPrevButton = this.el.nativeElement.querySelector('#crafts-prev-btn');
    this.craftsNextButton = this.el.nativeElement.querySelector('#crafts-next-btn');

    if (!this.craftsCarousel || !this.craftsPrevButton || !this.craftsNextButton) return;

    const getScrollDistance = () => {
      const firstCard = this.craftsCarousel.querySelector('.craft-card') as HTMLElement;
      if (!firstCard) return 324;
      const cardWidth = firstCard.offsetWidth;
      const gap = 24;
      return cardWidth + gap;
    };

    const slide = (dir: 'next' | 'prev') => {
      const dist = getScrollDistance();
      this.craftsCarousel.scrollBy({
        left: dir === 'next' ? dist : -dist,
        behavior: 'smooth',
      });
    };

    this.craftsNextButton.addEventListener('click', () => slide('next'));
    this.craftsPrevButton.addEventListener('click', () => slide('prev'));
  }

  /** 🏰 Attractions carousel */
  private initAttractionsCarousel() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.attractionsCarousel = this.el.nativeElement.querySelector('#attractions-carousel-track');
    this.attractionsPrevButton = this.el.nativeElement.querySelector('#attractions-prev-btn');
    this.attractionsNextButton = this.el.nativeElement.querySelector('#attractions-next-btn');

    if (!this.attractionsCarousel || !this.attractionsPrevButton || !this.attractionsNextButton) return;

    const getScrollDistance = () => {
      const firstCard = this.attractionsCarousel.querySelector('.attraction-card') as HTMLElement;
      if (!firstCard) return 324;
      const cardWidth = firstCard.offsetWidth;
      const gap = 24;
      return cardWidth + gap;
    };

    const slide = (dir: 'next' | 'prev') => {
      const dist = getScrollDistance();
      this.attractionsCarousel.scrollBy({
        left: dir === 'next' ? dist : -dist,
        behavior: 'smooth',
      });
    };

    this.attractionsNextButton.addEventListener('click', () => slide('next'));
    this.attractionsPrevButton.addEventListener('click', () => slide('prev'));
  }

  /**  Destination carousel (Apple-style full-screen slider)  */
  private initDestinationCarousel() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.destinationCarousel = this.el.nativeElement.querySelector('#destination-slider-track');
    this.destinationPrevButton = this.el.nativeElement.querySelector('#destination-prev-btn');
    this.destinationNextButton = this.el.nativeElement.querySelector('#destination-next-btn');

    if (!this.destinationCarousel || !this.destinationPrevButton || !this.destinationNextButton) return;

    const getScrollDistance = () => this.destinationCarousel.offsetWidth;

    const slide = (dir: 'next' | 'prev') => {
      const dist = getScrollDistance();
      this.destinationCarousel.scrollBy({
        left: dir === 'next' ? dist : -dist,
        behavior: 'smooth',
      });
      setTimeout(() => this.updateDestinationDots(), 500);
    };

    // Button listeners
    this.destinationNextButton.addEventListener('click', () => slide('next'));
    this.destinationPrevButton.addEventListener('click', () => slide('prev'));

    // Auto-slide (like Apple product showcase)
    const startAutoSlide = () => {
      clearInterval(this.autoDestinationSlide);
      this.autoDestinationSlide = setInterval(() => slide('next'), this.destinationDelay);
    };

    startAutoSlide();

    // Update dots on scroll
    this.destinationCarousel.addEventListener('scroll', () => this.updateDestinationDots());
  }

  /** 🔘 Update active slide dots */
  private updateDestinationDots() {
    const track = this.destinationCarousel;
    if (!track) return;

    const scrollLeft = track.scrollLeft;
    const slideWidth = track.offsetWidth;
    const activeIndex = Math.round(scrollLeft / slideWidth);

    const dotsContainers = this.el.nativeElement.querySelectorAll('.slide-dots');
    dotsContainers.forEach((container: HTMLElement) => {
      const dots = Array.from(container.children) as HTMLElement[];
      dots.forEach((dot, idx) => dot.classList.toggle('active', idx === activeIndex));
    });
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const aboutSection = this.el.nativeElement.querySelector('.about-section');
    if (aboutSection && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.ngZone.run(() => (this.aboutVisible = true));
              observer.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      observer.observe(aboutSection);
    } else {
      this.aboutVisible = true;
    }
  }

  /** 🎞️ Parallax scroll effect */
  @HostListener('window:scroll', [])
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    const aboutSection = this.el.nativeElement.querySelector('.about-section');
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const sectionTop = rect.top + scrollY;
      this.parallaxOffset = (scrollY - sectionTop) * 0.3;
    }
  }
}
