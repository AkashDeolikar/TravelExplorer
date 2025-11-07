/// <reference types="@types/google.maps" />
import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface GuideLocation {
  name: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  description: string;
}

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './guide.html',
  styleUrls: ['./guide.css']
})
export class GuideComponent implements OnInit, AfterViewInit {
  map!: google.maps.Map;
  markers: google.maps.Marker[] = [];
  directionsService!: google.maps.DirectionsService;
  directionsRenderer!: google.maps.DirectionsRenderer;

  searchTerm = '';
  userLocation?: google.maps.LatLngLiteral;

  locations: GuideLocation[] = [
    { name: 'Taj Mahal', city: 'Agra', state: 'Uttar Pradesh', lat: 27.1751, lng: 78.0421, description: 'Iconic Mughal mausoleum in Agra.' },
    { name: 'Qutub Minar', city: 'Delhi', state: 'Delhi', lat: 28.5244, lng: 77.1855, description: 'Historic minaret in Delhi.' },
    { name: 'Gateway of India', city: 'Mumbai', state: 'Maharashtra', lat: 18.922, lng: 72.8347, description: 'Famous monument in Mumbai.' },
    { name: 'Mysore Palace', city: 'Mysuru', state: 'Karnataka', lat: 12.3051, lng: 76.6551, description: 'Grand palace in Karnataka.' },
    { name: 'Hawa Mahal', city: 'Jaipur', state: 'Rajasthan', lat: 26.2936, lng: 75.8220, description: 'Palace in Jaipur.' },
    { name: 'Charminar', city: 'Hyderabad', state: 'Telangana', lat: 17.3616, lng: 78.4747, description: 'Historic mosque in Hyderabad.' },
  ];

  private readonly indiaCenter = { lat: 20.5937, lng: 78.9629 };

  constructor(private ngZone: NgZone) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.initMap();
    this.getUserLocation();
  }

  getUserLocation() {
    if (!navigator.geolocation) return this.showToast('❌ Geolocation not supported.');
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        this.showToast('📍 Location detected successfully!');
      },
      () => this.showToast('⚠️ Location access denied.')
    );
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById('guideMap') as HTMLElement, {
      center: this.indiaCenter,
      zoom: 5,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
    });
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer({ map: this.map });
    this.addMarkers();
  }

  filteredLocations(): GuideLocation[] {
    const term = this.searchTerm.toLowerCase();
    return this.locations.filter(
      loc => loc.name.toLowerCase().includes(term) || loc.city.toLowerCase().includes(term) || loc.state.toLowerCase().includes(term)
    );
  }

  goToCurrentLocation() {
    if (!this.userLocation) return this.showToast('⚠️ Enable location.');
    this.map.panTo(this.userLocation);
    this.map.setZoom(10);
    new google.maps.Marker({
      position: this.userLocation,
      map: this.map,
      title: 'You are here',
      icon: { path: google.maps.SymbolPath.CIRCLE, scale: 8, fillColor: '#10b981', fillOpacity: 0.9, strokeWeight: 2, strokeColor: '#fff' },
    });
  }

  addMarkers() {
    this.markers.forEach(m => m.setMap(null));
    this.markers = [];
    this.filteredLocations().forEach(loc => {
      const marker = new google.maps.Marker({ position: { lat: loc.lat, lng: loc.lng }, map: this.map, title: loc.name });
      const infoWindow = new google.maps.InfoWindow({ content: `<h3>${loc.name}</h3><p>${loc.description}</p>` });
      marker.addListener('click', () => this.ngZone.run(() => infoWindow.open(this.map, marker)));
      this.markers.push(marker);
    });
  }

  panToLocation(loc: GuideLocation) {
    this.map.panTo({ lat: loc.lat, lng: loc.lng });
    this.map.setZoom(8);
    if (!this.userLocation) return this.showToast('⚠️ Enable location first.');
    this.directionsRenderer.setMap(this.map);
    this.directionsService.route(
      { origin: this.userLocation, destination: { lat: loc.lat, lng: loc.lng }, travelMode: google.maps.TravelMode.DRIVING },
      (result, status) => { if (status === 'OK' && result) this.directionsRenderer.setDirections(result); else this.showToast('❌ Unable to draw route.'); }
    );
  }

  calculateDistance(dest: GuideLocation) {
    if (!this.userLocation) return this.showToast('⚠️ Enable location to calculate distance.');
    new google.maps.DistanceMatrixService().getDistanceMatrix(
      { origins: [this.userLocation], destinations: [{ lat: dest.lat, lng: dest.lng }], travelMode: google.maps.TravelMode.DRIVING, unitSystem: google.maps.UnitSystem.METRIC },
      (res, status) => {
        if (status === 'OK' && res && res.rows[0].elements[0].status === 'OK') {
          const el = res.rows[0].elements[0];
          alert(`Distance: ${el.distance.text}\nDuration: ${el.duration.text}`);
        } else alert('Unable to calculate distance');
      }
    );
  }

  showToast(message: string) {
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.textContent = message;
    document.getElementById('toast-container')!.appendChild(toast);
    setTimeout(() => toast.classList.add('visible'), 100);
    setTimeout(() => { toast.classList.remove('visible'); toast.remove(); }, 4000);
  }
}
