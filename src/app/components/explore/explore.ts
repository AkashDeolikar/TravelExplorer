import { Component, OnInit , Input} from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SlicePipe],
  templateUrl: './explore.html',
  styleUrls: ['./explore.css']
})
export class ExploreComponent implements OnInit {
  @Input() filter: string = '';
  allPlaces: any[] = [];
  places: any[] = [];
  states: string[] = [];
  categories: string[] = [];
  selectedState = '';
  selectedCategory = '';
  searchQuery = '';
  loading = false;
  error: string | null = null;

  constructor(
    private placeService: PlaceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch all places and filters first
    this.loadFiltersAndPlaces();

    // Subscribe to route changes to support /explore/:state
    this.route.params.subscribe(params => {
      const stateFromUrl = params['state']?.toLowerCase();
      if (stateFromUrl) {
        this.selectedState = stateFromUrl;
        this.applyFilters();
      } else {
        this.selectedState = '';
        this.applyFilters();
      }
    });
  }

  loadFiltersAndPlaces() {
    this.loading = true;

    // Fetch filters
    this.placeService.getFilters().subscribe({
      next: res => {
        this.states = res.states || [];
        this.categories = res.categories || [];
      }
    });

    // Fetch all places
    this.placeService.getPlaces().subscribe({
      next: data => {
        this.allPlaces = data;

        // fallback: derive states/categories if not from API
        if (!this.states.length) {
          this.states = Array.from(new Set(this.allPlaces.map(p => p.state))).filter(Boolean);
        }
        if (!this.categories.length) {
          this.categories = Array.from(new Set(this.allPlaces.map(p => p.category))).filter(Boolean);
        }

        this.applyFilters();
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.error = 'Failed to load places and filters.';
        this.loading = false;
      }
    });
  }

  applyFilters() {
    this.loading = true;

    const filters: any = {};
    if (this.selectedState) filters.state = this.selectedState;
    if (this.selectedCategory) filters.category = this.selectedCategory;
    if (this.searchQuery) filters.q = this.searchQuery;

    this.placeService.getPlaces(filters).subscribe({
      next: data => {
        this.places = data;
        this.loading = false;
        this.error = null;
      },
      error: err => {
        console.error(err);
        this.error = 'Failed to fetch places with current filters.';
        this.loading = false;
      }
    });
  }

  // When user clicks a state card
  // selectState(stateName: string) {
  //   this.selectedState = stateName.toLowerCase();
  //   this.selectedCategory = '';
  //   this.searchQuery = '';
  //   this.router.navigate(['/explore', this.selectedState]);
  //   this.applyFilters();
  // }
  selectState(stateName: string) {
  // Navigate to the state page dynamically
  this.router.navigate(['/state', stateName]);
}


  clearFilters(resetStateOnly: boolean = false) {
    if (resetStateOnly) {
      this.selectedState = '';
      this.router.navigate(['/explore']);
      this.applyFilters();
      return;
    }

    this.selectedState = '';
    this.selectedCategory = '';
    this.searchQuery = '';
    this.router.navigate(['/explore']);
    this.applyFilters();
  }

  getStateImage(stateName: string) {
    const place = this.allPlaces.find(p => p.state?.toLowerCase() === stateName.toLowerCase() && p.image);
    return place?.image || 'assets/default-state.jpg';
  }

}
