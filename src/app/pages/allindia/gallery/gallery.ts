import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="gallery">
      <div class="gallery-grid">
        <img *ngFor="let img of images" [src]="img" loading="lazy" />
      </div>
    </section>
  `,
  styles: [`
    .gallery { padding: 3rem 1rem; max-width:1200px; margin:0 auto; }
    .gallery-grid{ display:grid; gap:1rem; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); }
    .gallery-grid img{ width:100%; height:220px; object-fit:cover; border-radius:12px; box-shadow:0 10px 28px rgba(0,0,0,.07); transition:transform .6s; }
    .gallery-grid img:hover{ transform:scale(1.04); }
  `]
})
export class Gallery {
  @Input() images: string[] = [];
}
