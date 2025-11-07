import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- import this
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../../services/place.service';
import { RouterModule } from '@angular/router'; // for routerLink
import { SlicePipe } from '@angular/common'; // for slice pipe

@Component({
  selector: 'app-statepage',
  standalone: true, // <-- make standalone if using imports
  imports: [CommonModule, RouterModule, SlicePipe], // <-- add here
  templateUrl: './statepage.html',
  styleUrls: ['./statepage.css']
})
export class StatePageComponent implements OnInit {
  stateName: string = '';
  places: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.stateName = params['name'];
      this.loadPlaces();
    });
  }

  loadPlaces() {
    this.loading = true;
    this.placeService.getPlaces({ state: this.stateName }).subscribe({
      next: (data) => {
        this.places = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load places for ' + this.stateName;
        this.loading = false;
      }
    });
  }
}
