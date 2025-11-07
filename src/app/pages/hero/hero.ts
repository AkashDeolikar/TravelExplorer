import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="apple-hero">
      <!-- Background -->
      <div class="hero-bg" [style.backgroundImage]="'url(' + image + ')'"></div>
      <div class="hero-glow"></div>
      <div class="hero-overlay"></div>

      <!-- Content -->
      <div class="hero-content">
        <h1 class="hero-title">{{ title }}</h1>
        <p *ngIf="subtitle" class="hero-subtitle">{{ subtitle }}</p>
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    /* 🌄 Base structure */
    .apple-hero {
      position: relative;
      height: 90vh;
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      color: white;
      isolation: isolate;
      background: black;
    }

    /* 🎥 Background image */
    .hero-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center center;
      transform: scale(1.08);
      transition: transform 2s cubic-bezier(0.25, 0.8, 0.25, 1);
      will-change: transform;
      z-index: 0;
    }

    .apple-hero:hover .hero-bg {
      transform: scale(1.1);
    }

    /* ✨ Glow layer — cinematic Apple lighting */
    .hero-glow {
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at 50% 75%,
        rgba(255, 255, 255, 0.15),
        rgba(0, 0, 0, 0.1) 60%,
        transparent 100%
      );
      mix-blend-mode: screen;
      opacity: 0.8;
      z-index: 1;
    }

    /* 🌫️ Subtle overlay for depth */
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.75) 100%
      );
      z-index: 1;
    }

    /* 🪶 Content styling */
    .hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      padding: 2rem;
      max-width: 1000px;
      animation: fadeInUp 1.3s ease both;
    }

    /* 🖋️ Title — Apple-style typography */
    .hero-title {
      font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif;
      font-size: clamp(2.2rem, 6vw, 4.8rem);
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1.05;
      margin: 0;
      background: linear-gradient(90deg, #fff, #dcdcdc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; 
      animation: titleGlow 3s ease-in-out infinite alternate;
    }

    /* 🌈 Subtitle — clean and elegant */
    .hero-subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif;
      font-size: clamp(1rem, 2vw, 1.6rem);
      font-weight: 300;
      opacity: 0.92;
      margin-top: 1.2rem;
      letter-spacing: 0.5px;
      color: rgba(255, 255, 255, 0.9);
      text-shadow: 0 3px 14px rgba(0, 0, 0, 0.35);
      animation: fadeIn 2s ease both;
    }

    /* 🔮 Animations */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes titleGlow {
      from { filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.06)); }
      to { filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.06)); }
    }

    /* 🧘 Responsive */
    @media (max-width: 768px) {
      .apple-hero {
        height: 70vh;
      }
      .hero-title {
        font-size: clamp(1.8rem, 5vw, 3rem);
      }
      .hero-subtitle {
        font-size: 1rem;
      }
    }
  `]
})
export class HeroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() image = '';
}
