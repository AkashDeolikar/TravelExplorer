import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreComponent } from '../../components/explore/explore';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [
    CommonModule,   // For *ngIf, *ngFor
    FormsModule,    // For [(ngModel)]
    ExploreComponent
  ],
  templateUrl: './explore.html',
  styleUrls: ['./explore.css']
})
export class ExplorePageComponent {
  searchTerm: string = '';
}
