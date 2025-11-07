import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="apple-gallery">
      <div class="gallery-header">
        <h2 class="gallery-title">Gallery</h2>
        <p class="gallery-subtitle">Immerse yourself in breathtaking moments</p>
      </div>

      <div class="gallery-grid">
        <div class="gallery-item" *ngFor="let img of images">
          <img [src]="img" [alt]="'Gallery image'" loading="lazy" />
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* 🍏 Base Container */
    .apple-gallery {
      position: relative;
      overflow: hidden;
      padding: 6rem 1rem;
      max-width: 1400px;
      margin: 0 auto;
      background: linear-gradient(180deg, #fff, #f6f8fb);
    }

    /* 🩶 Title Section */
    .gallery-header {
      text-align: center;
      margin-bottom: 4rem;
      animation: fadeIn 1.2s ease both;
    }

    .gallery-title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      letter-spacing: -0.02em;
      background: linear-gradient(90deg, #000, #555);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
    }

    .gallery-subtitle {
      color: #6b7280;
      font-size: 1.1rem;
      margin-top: 0.6rem;
      font-weight: 400;
      letter-spacing: 0.01em;
    }

    /* 🌁 Grid Layout */
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      justify-items: center;
      animation: fadeUp 1.3s ease both;
    }

    /* 🪞 Gallery Items */
    .gallery-item {
      position: relative;
      overflow: hidden;
      border-radius: 24px;
      box-shadow:
        0 8px 30px rgba(0, 0, 0, 0.08),
        0 2px 8px rgba(0, 0, 0, 0.03);
      transform: translateY(0);
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(12px);
    }

    .gallery-item img {
      width: 100%;
      height: 280px;
      object-fit: cover;
      border-radius: 24px;
      transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
      filter: brightness(0.98);
    }

    /* ✨ Hover Effects */
    .gallery-item:hover {
      transform: translateY(-6px);
      box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.1),
        0 4px 10px rgba(0, 0, 0, 0.05);
    }

    .gallery-item:hover img {
      transform: scale(1.05);
      filter: brightness(1.05) contrast(1.05);
    }

    /* 🌫️ Light Overlay */
    .gallery-item::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 100%
      );
      opacity: 0;
      transition: opacity 0.5s ease;
      border-radius: 24px;
      pointer-events: none;
    }

    .gallery-item:hover::after {
      opacity: 1;
    }

    /* 🧘 Motion */
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* 📱 Responsive */
    @media (max-width: 768px) {
      .apple-gallery {
        padding: 4rem 1rem;
      }
      .gallery-item img {
        height: 240px;
      }
      .gallery-subtitle {
        font-size: 1rem;
      }
    }
  `]
})
export class Gallery {
  @Input() images: string[] = [];
}
