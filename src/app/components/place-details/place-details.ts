import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Place } from '../../models/place.model';

@Component({
  selector: 'app-place-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './place-details.html',
  styleUrl: './place-details.css'
})
export class PlaceDetailsComponent {
  @Input() place!: Place;

  goToBooking(): void {
    //NAVIGATE TO BOOKING PAGE WITH PLACE ID
    window.location.href = `/booking/${this.place._id}`;
  }
}
