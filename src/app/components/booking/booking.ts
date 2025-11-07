import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

type TripType = 'train' | 'flight' | 'bus' | 'cab';

interface OfferItem {
  id: string;
  provider: string;
  title: string;
  price: number; // INR
  depart: string; // time or text
  arrive: string;
  duration?: string;
  link?: string; // external booking/search link
  rating?: number;
  seatsLeft?: number;
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class BookingComponent implements OnInit {
  // UI state
  tripType: TripType = 'train';
  from = 'Delhi';
  to = 'Mumbai';
  date = this.isoDateToday();
  passengers = 1;
  searchTerm = '';
  sortBy: 'price' | 'duration' | 'rating' = 'price';

  // UI effects
  loading = false;
  skeletonCount = 4;

  // internal "live" results
  results: OfferItem[] = [];

  // provider color / initials mapping to create realistic badges
  providerMeta: Record<string, { color: string; initials: string; domainHint?: string }> = {
    'IRCTC': { color: '#0b63b6', initials: 'IR', domainHint: 'irctc.co.in' },
    'RedBus': { color: '#e53935', initials: 'RB', domainHint: 'redbus.in' },
    'Yatra': { color: '#0d6efd', initials: 'YT', domainHint: 'yatra.com' },
    'MakeMyTrip': { color: '#ff7a00', initials: 'MMT', domainHint: 'makemytrip.com' },
    'Goibibo': { color: '#f97316', initials: 'GB', domainHint: 'goibibo.com' },
    'SkyeAir': { color: '#0ea5a4', initials: 'SA' },
    'BlueJet': { color: '#2563eb', initials: 'BJ' },
    'FastCab': { color: '#10b981', initials: 'FC' },
    'GoDrive': { color: '#7c3aed', initials: 'GD' },
    'Uber': { color: '#111827', initials: 'UB', domainHint: 'uber.com' },
    'Ola': { color: '#00a0df', initials: 'OL', domainHint: 'olacabs.com' },
    'RedBusPartner': { color: '#d32f2f', initials: 'RB' }
  };

  // base sample seeds — used to generate results on search (feels dynamic)
  private baseSeeds: OfferItem[] = [
    { id: 't1', provider: 'IRCTC', title: 'Rajdhani Express — AC 1A', price: 1850, depart: '22:00', arrive: '06:30', duration: '8h 30m', rating: 4.6, seatsLeft: 6 },
    { id: 't2', provider: 'IRCTC', title: 'Shatabdi Express — CC', price: 1200, depart: '07:00', arrive: '10:30', duration: '3h 30m', rating: 4.4, seatsLeft: 12 },
    { id: 'f1', provider: 'SkyeAir', title: 'Direct — Economy', price: 6200, depart: '09:00', arrive: '11:15', duration: '2h 15m', rating: 4.1, seatsLeft: 4 },
    { id: 'f2', provider: 'BlueJet', title: '1 stop — Saver', price: 4800, depart: '13:30', arrive: '17:00', duration: '3h 30m', rating: 4.3, seatsLeft: 8 },
    { id: 'b1', provider: 'RedBus', title: 'Volvo AC — Seater', price: 850, depart: '23:00', arrive: '05:00', duration: '6h', rating: 4.2, seatsLeft: 10 },
    { id: 'b2', provider: 'Yatra', title: 'Sleeper Non-AC', price: 420, depart: '20:00', arrive: '04:30', duration: '8h 30m', rating: 3.9, seatsLeft: 20 },
    { id: 'c1', provider: 'Ola', title: 'Sedan — Metered', price: 650, depart: 'Now', arrive: '—', duration: '30m', rating: 4.0, seatsLeft: 99 },
    { id: 'c2', provider: 'Uber', title: 'SUV — Fixed', price: 1200, depart: 'Now', arrive: '—', duration: '40m', rating: 4.5, seatsLeft: 99 }
  ];

  ngOnInit(): void {
    // initial "live" load to show real-feel home results
    this.search(true);
  }

  isoDateToday(): string {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  // Called when user presses Search
  search(initial = false) {
    // set loading skeletons
    this.loading = true;
    this.results = [];

    // Simulate a network call using setTimeout
    // add small variation to simulate network jitter
    const delay = initial ? 700 + Math.random() * 400 : 600 + Math.random() * 900;
    setTimeout(() => {
      // Build realistic results by selecting matching seeds and mutating slightly
      const seeds = this.baseSeeds.filter(s => this.tripType === this.inferTypeFromSeed(s) );
      // when searchTerm present, filter by provider/title
      const term = this.searchTerm.trim().toLowerCase();
      let matched = seeds.filter(s => {
        if (!term) return true;
        return (s.title + ' ' + s.provider).toLowerCase().includes(term);
      });

      // if none matched (e.g., switching tripType), generate 3-5 synthetic offers for that type
      if (matched.length === 0) {
        matched = this.syntheticOffersFor(this.tripType);
      }

      // clone + mutate prices and seats so it feels dynamic
      const now = Date.now();
      this.results = matched.map((s, i) => {
        const priceVariation = Math.round((Math.sin((now + i * 1000) / 12345) + 1) * 0.12 * s.price);
        const price = Math.max(99, s.price + (Math.random() < 0.5 ? -priceVariation : priceVariation));
        const seatsLeft = s.seatsLeft ? Math.max(1, s.seatsLeft - Math.floor(Math.random() * 5)) : Math.max(1, Math.floor(Math.random() * 20) + 1);
        const link = this.makeExternalLinkFor(s.provider, this.from, this.to, this.date);
        return { ...s, price, seatsLeft, link, id: `${s.id}-${Math.floor(Math.random() * 9999)}` };
      });

      // do a stable sort depending on sortBy
      this.results = this.sortResults(this.results);
      this.loading = false;
    }, delay);
  }

  // derive trip type from seed entry
  private inferTypeFromSeed(s: OfferItem): TripType {
    const p = (s.provider || '').toLowerCase();
    if (p.includes('air') || p.includes('jet') || s.title.toLowerCase().includes('direct') || s.title.toLowerCase().includes('stop')) return 'flight';
    if (p.includes('bus') || s.provider === 'RedBus' || s.provider === 'Yatra') return 'bus';
    if (p === 'ola' || p === 'uber' || s.title.toLowerCase().includes('sedan') || s.title.toLowerCase().includes('suv')) return 'cab';
    return 'train';
  }

  private syntheticOffersFor(type: TripType): OfferItem[] {
    // quick synthetic generator that produces realistic items for the chosen type
    const out: OfferItem[] = [];
    if (type === 'train') {
      out.push({ id: 't-s1', provider: 'IRCTC', title: 'Superfast Express — 2A', price: 1500, depart: '21:40', arrive: '06:10', duration: '8h 30m', rating: 4.5, seatsLeft: 12 });
      out.push({ id: 't-s2', provider: 'IRCTC', title: 'Intercity Express — CC', price: 900, depart: '08:00', arrive: '12:30', duration: '4h 30m', rating: 4.0, seatsLeft: 20 });
    } else if (type === 'flight') {
      out.push({ id: 'f-s1', provider: 'SkyeAir', title: 'Early Bird — Economy', price: 5400, depart: '06:30', arrive: '08:45', duration: '2h 15m', rating: 4.1, seatsLeft: 6 });
      out.push({ id: 'f-s2', provider: 'BlueJet', title: 'Late Saver — 1 stop', price: 4700, depart: '22:30', arrive: '01:10', duration: '2h 40m', rating: 3.9, seatsLeft: 10 });
    } else if (type === 'bus') {
      out.push({ id: 'b-s1', provider: 'RedBus', title: 'Volvo — AC Sleeper', price: 950, depart: '22:30', arrive: '05:30', duration: '7h 00m', rating: 4.3, seatsLeft: 8 });
      out.push({ id: 'b-s2', provider: 'Yatra', title: 'Semi Sleeper — Non-AC', price: 430, depart: '19:30', arrive: '05:10', duration: '9h 40m', rating: 3.7, seatsLeft: 15 });
    } else {
      out.push({ id: 'c-s1', provider: 'Ola', title: 'Sedan — Metered', price: 720, depart: 'Now', arrive: '—', duration: '35m', rating: 4.0, seatsLeft: 99 });
      out.push({ id: 'c-s2', provider: 'Uber', title: 'Prime SUV — Fixed', price: 1290, depart: 'Now', arrive: '—', duration: '42m', rating: 4.5, seatsLeft: 99 });
    }
    return out;
  }

  private sortResults(list: OfferItem[]) {
    switch (this.sortBy) {
      case 'price': return list.sort((a, b) => a.price - b.price);
      case 'duration': return list.sort((a, b) => (a.duration || '').localeCompare(b.duration || ''));
      case 'rating': return list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      default: return list;
    }
  }

  setTrip(type: TripType) {
    this.tripType = type;
    this.searchTerm = '';
    this.search();
  }

  swap() {
    const t = this.from; this.from = this.to; this.to = t;
  }

  // Create a "search" link that navigates to provider with a safe search query
  makeExternalLinkFor(provider: string, from: string, to: string, date: string) {
    // We'll craft reasonable search URLs — many providers don't support exact query via URL publicly,
    // so we use provider's site when known or fallback to Google site search query which shows provider results.
    const f = encodeURIComponent(from || '');
    const t = encodeURIComponent(to || '');
    const d = encodeURIComponent(date || '');
    const pf = this.providerMeta[provider];
    const domain = (pf && pf.domainHint) ? pf.domainHint : '';

    // provider-specific preferred patterns (best-effort)
    if (provider === 'IRCTC') return `https://www.irctc.co.in/nget/train-search`;
    if (provider === 'RedBus') return `https://www.redbus.in/search?fromCity=${f}&toCity=${t}&onward=${d}`;
    if (provider === 'Yatra') return `https://www.yatra.com/bus-tickets?from=${f}&to=${t}&date=${d}`;
    if (provider === 'MakeMyTrip') return `https://www.makemytrip.com/flights/?flt=${f}-${t}-${d}`;
    if (provider === 'Goibibo') return `https://www.goibibo.com/flights/${f}-${t}?date=${d}`;
    if (provider === 'Uber' || provider === 'Ola' || provider === 'Ola') {
      // open provider home page (require in-app selection)
      return `https://${domain || provider.toLowerCase()}.com/search?q=${f}+to+${t}+on+${d}`;
    }
    // Google Flights fallback (search-mode)
    if (this.tripType === 'flight') {
      return `https://www.google.com/search?q=flights+from+${f}+to+${t}+on+${d}`;
    }
    // generic provider search fallback
    return `https://www.google.com/search?q=${encodeURIComponent(provider + ' ' + from + ' to ' + to + ' ' + date)}`;
  }

  // called when user clicks "View" (opens link)
  openExternal(link?: string) {
    if (!link) return;
    window.open(link, '_blank');
  }

  book(item: OfferItem) {
    // mimic a booking step: show a tiny modal (here we use confirm for simplicity)
    const proceed = confirm(`Proceed to book:\n${item.provider} — ${item.title}\nPrice: ₹${item.price}\nOpen booking page?`);
    if (proceed && item.link) {
      window.open(item.link, '_blank');
    }
  }
}
