import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="info">
      <div class="info-inner">
        <div class="info-media" *ngIf="image">
          <img [src]="image" [alt]="mediaAlt || title" />
        </div>
        <div class="info-body">
          <h2>{{ title }}</h2>
          <p *ngIf="subtitle" class="muted">{{ subtitle }}</p>
          <ng-content></ng-content>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .info { padding: 4rem 1rem; max-width:1200px; margin:0 auto; }
    .info-inner { display:grid; gap:2rem; grid-template-columns:1fr; align-items:center;}
    .info-media img{ width:100%; border-radius:14px; box-shadow:0 10px 30px rgba(0,0,0,.06) }
    .info-body h2 { font-size: clamp(1.6rem, 3.2vw, 2.6rem); margin:0 0 .6rem; }
    .muted{ color:#4b5563; font-weight:300; }
    @media(min-width:900px){ .info-inner{ grid-template-columns: 1fr 1fr; } .info-media{ order:2 } }
  `]
})
export class Info {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() image?: string;
  @Input() mediaAlt?: string;
}
    