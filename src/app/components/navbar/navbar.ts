import {
  Component,
  HostListener,
  ElementRef,
  Renderer2,
  ViewChildren,
  QueryList,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
}

/**
 * Production-ready navbar:
 * - Accessible (roles, keyboard handling, focus styles)
 * - Click-outside & ESC handling
 * - Router-aware active state
 * - Mobile menu with body scroll lock
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  navItems: NavItem[] = [
    { label: 'Home', path: '/home' },
    {
      label: 'Explore',
      children: [
        { label: 'Destinations', path: '/destination' },
        { label: 'Activities', path: '/activities' },
        { label: 'Guides', path: '/guide' }
      ]
    },
    {
      label: 'Regions',
      children: [
        { label: 'North India', path: '/explorenorth' },
        { label: 'South India', path: '/exploresouth' },
        { label: 'East India', path: '/exploreeast' },
        { label: 'West India', path: '/explorewest' }
      ]
    },
    {
      label: 'Heritage & Horizons',
      children: [
        {
          label: 'Roots & Routes',
          children: [
            { label: 'Agartala', path: '/exploredestini//agartala' },
            { label: 'AMritsar', path: '/exploredestini/amritsar' },
            { label: 'Chandigarh', path: '/exploredestini/chandigarh' },
            { label: 'Delhi', path: '/exploredestini/delhi' },
            { label: 'Dwraka', path: '/exploredestini/dwarka' },
            { label: 'Gangtok', path: '/exploredestini/gangtok' },
            { label: 'Goa', path: '/exploredestini/goa' },
            { label: 'Gurugram', path: '/exploredestini/gurugram' },
            { label: 'Guwahati', path: '/exploredestini/guwahati' },
            { label: 'Haridwar', path: '/exploredestini/haridwar' },
            { label: 'Hyderabad', path: '/exploredestini/hyderabad' },
            { label: 'Kochi', path: '/exploredestini/kochi' },
            { label: 'Leh', path: '/exploredestini/Leh' },
            { label: 'Manali', path: '/exploredestini/manali' },
            { label: 'Mechuka', path: '/exploredestini/mechuka' },
            { label: 'Mumbai', path: '/exploredestini/mumbai' },
            { label: 'Srinagar', path: '/exploredestini/Srinagar' },
            { label: 'Udaipur', path: '/exploredestini/udaipur' },
            { label: 'Varanasi', path: '/exploredestini/varanasi' },
            { label: 'Ziro', path: '/exploredestini/ziro' },
          ]
        },
        {
          label: 'Explore India',
          children: [
            { path: 'getalleppeybackwaters', label: 'Alleppey Backwaters' },
            { path: 'getamberfort', label: 'Amber Fort' },
            { path: 'getanjunabeach', label: 'Anjuna Beach' },
            { path: 'getbalaji', label: 'Balaji Temple' },
            { path: 'getbangaram', label: 'Bangaram Island' },
            { path: 'getbrahmasarowar', label: 'Brahma Sarowar' },
            { path: 'getchamundi', label: 'Chamundi Temple' },
            { path: 'getcharminar', label: 'Charminar' },
            { path: 'getcheraibeach', label: 'Cherai Beach' },
            { path: 'getchidiyatapu', label: 'Chidiya Tapu' },
            { path: 'getdelhi', label: 'Delhi' },
            { path: 'getdwarkadhish', label: 'Dwarkadhish Temple' },
            { path: 'getdzukouvalley', label: 'Dzukou Valley' },
            { path: 'getgatewayofindia', label: 'Gate way Of India' },
            { path: 'getgoldentemple', label: 'Golden Temple' },
            { path: 'gethampitemples', label: 'Hampi Temples' },
            { path: 'gethawamahal', label: 'Hawa Mahal' },
            { path: 'getjagannath', label: 'Jagannath Temple' },
            { path: 'getkamakhya', label: 'Kamakhya Temple' },
            { path: 'getkanglafort', label: 'Kangla Fort' },
            { path: 'getkonark', label: 'Konark Sun Temple' },
            { path: 'getleh', label: 'Leh Pangong' },
            { path: 'getmahabodhitemple', label: 'Mahabodhi Temple' },
            { path: 'getmysore', label: 'Mysore Palace' },
            { path: 'getnaidacaves', label: 'Naida Caves' },
            { path: 'getnohlikaifall', label: 'Nohkalikai Falls' },
            { path: 'getqutubminar', label: 'Qutub Minar' },
            { path: 'getrockgarden', label: 'Rock Garden' },
            { path: 'getrohtangpass', label: 'Rohtang Pass' },
            { path: 'getshore', label: 'Shore Temple' },
            { path: 'getsundarbans', label: 'Sundar bans' },
            { path: 'gettajmahal', label: 'Taj Mahal' },
            { path: 'getthefrenchquarter', label: 'French Quarter' },
            { path: 'gettulipgarden', label: 'Tulip Garden' },
            { path: 'getvaranasighats', label: 'Varanasi Ghats' },
            { path: 'getvictoriamemorial', label: 'Victoria Memorial' },
            { path: 'getvirupaksha', label: 'Virupaksha Temple' },
            { path: 'getvivekanandsarowar', label: 'vivekanand sarowar' }
          ]
        },
        {
          label: 'Culture & Heritage',
          children: [
            { label: 'Aipan Art', path: '/getaipan' },
            { label: 'Paunchei', path: '/getpaunchei' },
            { label: 'Muga Silk', path: '/getmugasilk' },
            { label: 'Bastar Dhokra', path: '/getbastardhokra' },
            { label: 'Bihar Khatwa', path: '/getkhatwa' },
            { label: 'Durgi Stone', path: '/getdurgistonek' },
            { label: 'Filligree', path: '/getfiligree' },
            { label: 'walnut wood carving', path: '/getwalnutwood' },
            { label: 'Warli Painting', path: '/getwarli' },
            { label: 'Patan Patola', path: '/getpatanpatola' },
            { label: 'Punjab Phulkari', path: '/getphulkri' },
            { label: 'Kathputlis', path: '/getkathputlis' },
            { label: 'Santipore Saree', path: '/getsaree' },
            { label: 'Zardozi', path: '/getzardozi' }
          ]
        },
      ]
    },
    { label: 'Booking', path: '/booking' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  isMenuOpen = false;
  activeDropdownIndex: number | null = null;
  activeUrl = '';
  isScrolled = false;

  private routerSub: Subscription;
  private unlistenDocumentClick: (() => void) | null = null;
  private unlistenResize: (() => void) | null = null;

  @ViewChildren('dropdownBtn', { read: ElementRef }) dropdownButtons!: QueryList<ElementRef>;
  @ViewChildren('dropdownMenu', { read: ElementRef }) dropdownMenus!: QueryList<ElementRef>;

  constructor(private router: Router, private host: ElementRef, private renderer: Renderer2) {
    // keep activeUrl updated for active state
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((ev: any) => (this.activeUrl = ev.urlAfterRedirects || ev.url));
  }

  ngAfterViewInit(): void {
    // Listen for clicks outside component to close menus
    this.unlistenDocumentClick = this.renderer.listen('document', 'click', (event: Event) => {
      if (!this.host.nativeElement.contains(event.target)) {
        this.closeAll();
      }
    });

    // Close mobile menu if viewport resized beyond mobile
    this.unlistenResize = this.renderer.listen('window', 'resize', () => {
      if (window.innerWidth > 1024 && this.isMenuOpen) {
        this.closeAll();
      }
    });
  }

  activeSubDropdown: string | null = null;

  toggleSubDropdown(label: string, ev: Event) {
    if (window.innerWidth > 1024) return; // only mobile
    ev.stopPropagation();
    this.activeSubDropdown = this.activeSubDropdown === label ? null : label;
  }


  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.unlistenDocumentClick?.();
    this.unlistenResize?.();
  }

  // Host listener for scroll -> toggles subtle scrolled class
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  // Keyboard shortcuts (Escape closes menus; when open trap some keys)
  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeAll();
    }

    // If mobile menu open and user presses Tab on last element, allow natural tabbing.
    // If you want a full focus trap, you can replace this with a FocusTrap implementation.
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.lockBodyScroll(this.isMenuOpen);
    // when opening, focus first focusable link for keyboard users
    if (this.isMenuOpen) {
      // small timeout to ensure DOM updated
      setTimeout(() => {
        const firstLink = this.host.nativeElement.querySelector('.nav-links a, .nav-links button');
        (firstLink as HTMLElement)?.focus?.();
      }, 50);
    }
  }

  toggleDropdown(index: number, ev?: Event): void {
    ev?.preventDefault();
    this.activeDropdownIndex = this.activeDropdownIndex === index ? null : index;

    // when opening a dropdown with keyboard, focus first item
    if (this.activeDropdownIndex !== null) {
      setTimeout(() => {
        const menu = this.dropdownMenus.toArray()[index];
        if (menu) {
          const firstItem: HTMLElement | null = menu.nativeElement.querySelector('a');
          firstItem?.focus?.();
        }
      }, 60);
    }
  }

  closeAll(): void {
    this.isMenuOpen = false;
    this.activeDropdownIndex = null;
    this.lockBodyScroll(false);
  }

  lockBodyScroll(locked: boolean): void {
    document.body.style.overflow = locked ? 'hidden' : '';
  }

  isActive(path?: string): boolean {
    if (!path) return false;
    // exact or startsWith to accommodate routed parents
    return this.activeUrl === path || this.activeUrl.startsWith(path);
  }

  isDropdownActive(children?: NavItem[]): boolean {
    if (!children) return false;
    return children.some(c => c.path && this.activeUrl.startsWith(c.path));
  }

  // For anchor keyboard activation on dropdown headers (Enter/Space)
  onDropdownKey(event: KeyboardEvent, idx: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleDropdown(idx);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      // open if closed
      if (this.activeDropdownIndex !== idx) {
        this.toggleDropdown(idx);
      }
      // focus first child
      setTimeout(() => {
        const menu = this.dropdownMenus.toArray()[idx];
        if (menu) {
          const first = menu.nativeElement.querySelector('a');
          (first as HTMLElement)?.focus?.();
        }
      }, 50);
    }
  }
}
