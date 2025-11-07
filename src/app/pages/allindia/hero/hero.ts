import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-image" [style.backgroundImage]="'url(' + image + ')'"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>{{ title }}</h1>
        <p class="subtitle" *ngIf="subtitle">{{ subtitle }}</p>
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styles: [`
    :host { display:block; }
    .hero { position:relative; height:70vh; min-height:420px; display:flex; align-items:center; justify-content:center; overflow:hidden;}
    .hero-image { position:absolute; inset:0; background-size:cover; background-position:center; transform:scale(1.05); filter:brightness(.72); transition:transform 1.4s cubic-bezier(.25,.8,.25,1); }
    .hero-overlay { position:absolute; inset:0; background:radial-gradient(circle at 50% 70%, rgba(0,0,0,0.55), rgba(0,0,0,0.25) 40%, transparent 80%); }
    .hero-content { position:relative; z-index:2; text-align:center; color:#fff; padding: 2rem; max-width:1100px;}
    .hero-content h1 { font-size:clamp(2rem,6vw,4.2rem); margin:0; font-weight:700; }
    .hero-content .subtitle { opacity:.9; margin-top:.6rem; font-weight:300;}
  `]
})
export class Hero {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() image = '';
}
