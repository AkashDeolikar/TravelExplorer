import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="apple-info" [class.visible]="visible">
      <div class="info-grid">
        <div class="info-media" *ngIf="image">
          <img [src]="image" [alt]="mediaAlt || title" loading="lazy" />
        </div>

        <div class="info-text">
          <h2>{{ title }}</h2>
          <p *ngIf="subtitle" class="subtitle">{{ subtitle }}</p>

          <div *ngIf="quickFacts?.length" class="facts">
            <div *ngFor="let fact of quickFacts" class="fact">
              <span class="fact-key">{{ fact.key }}</span>
              <span class="fact-value">{{ fact.value }}</span>
            </div>
          </div>

          <div *ngIf="highlights?.length" class="highlights">
            <div *ngFor="let item of highlights" class="highlight">
              <div class="icon">{{ item.icon }}</div>
              <div>
                <h4>{{ item.title }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <ng-content></ng-content>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Base Layout */
    .apple-info {
      padding: 6rem 2rem;
      max-width: 1300px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(60px);
      transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .apple-info.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .info-grid {
      display: grid;
      gap: 4rem;
      grid-template-columns: 1fr;
      align-items: center;
    }

    /* Media */
    .info-media img {
      width: 100%;
      border-radius: 28px;
      box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.08),
        0 4px 10px rgba(0, 0, 0, 0.04);
      transform: scale(1.02);
      transition: transform 1.2s ease, filter 1.2s ease;
    }

    .apple-info.visible .info-media img:hover {
      transform: scale(1.05);
      filter: brightness(1.1);
    }

    /* Text Block */
    .info-text h2 {
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif;
      font-weight: 700;
      font-size: clamp(2rem, 4vw, 3rem);
      letter-spacing: -0.02em;
      color: #111;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-family: -apple-system, "SF Pro Text", "Inter", sans-serif;
      font-size: clamp(1.1rem, 1.8vw, 1.3rem);
      line-height: 1.6;
      font-weight: 300;
      color: #444;
      margin-bottom: 2rem;
      max-width: 600px;
    }

    /* Facts */
    .facts {
      background: rgba(240, 242, 245, 0.7);
      backdrop-filter: blur(8px);
      border-radius: 16px;
      padding: 1.2rem 1.6rem;
      margin-bottom: 2rem;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
    }

    .fact {
      display: flex;
      justify-content: space-between;
      font-size: 0.95rem;
      padding: 0.3rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .fact:last-child {
      border-bottom: none;
    }

    .fact-key {
      font-weight: 500;
      color: #111;
    }

    .fact-value {
      color: #555;
    }

    /* Highlights */
    .highlights {
      margin-top: 2.5rem;
      display: grid;
      gap: 1.2rem;
    }

    .highlight {
      display: flex;
      gap: 1.2rem;
      align-items: flex-start;
      padding: 1.2rem 1.4rem;
      background: linear-gradient(145deg, #ffffff, #f6f6f8);
      border-radius: 18px;
      transition: all 0.4s ease;
      box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.04),
        inset 0 1px 0 rgba(255,255,255,0.8);
    }

    .highlight:hover {
      transform: translateY(-3px);
      box-shadow:
        0 20px 40px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255,255,255,0.9);
    }

    .highlight .icon {
      font-size: 1.8rem;
      line-height: 1;
    }

    .highlight h4 {
      font-weight: 600;
      margin-bottom: 0.3rem;
      font-size: 1.1rem;
    }

    .highlight p {
      font-weight: 300;
      margin: 0;
      color: #555;
      font-size: 0.95rem;
    }

    /* Responsive */
    @media (min-width: 900px) {
      .info-grid {
        grid-template-columns: 1fr 1fr;
      }
      .info-media {
        order: 2;
      }
      .apple-info {
        padding: 7rem 3rem;
      }
    }

    @media (max-width: 600px) {
      .apple-info {
        padding: 4rem 1.2rem;
      }
      .info-text h2 {
        font-size: 1.8rem;
      }
    }
  `]
})
export class Info implements AfterViewInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() image?: string;
  @Input() mediaAlt?: string;
  @Input() quickFacts?: { key: string; value: string }[];
  @Input() highlights?: { icon: string; title: string; desc: string }[];

  visible = false;

  @Input() set data(value: any) {
    if (value) {
      this.title = value.aboutTitle || value.title || '';
      this.subtitle = value.aboutText || value.subtitle || '';
      this.image = value.image || '';
      this.quickFacts = value.quickFacts || [];
      this.highlights = value.highlights || [];
    }
  }

  ngAfterViewInit() {
    const el = document.querySelector('.apple-info');
    if (el) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) this.visible = true;
      }, { threshold: 0.2 });
      observer.observe(el);
    }
  }
}
