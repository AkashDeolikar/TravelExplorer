// scripts/generate-pages.js
// ✅ Node script to auto-generate destination pages using shared components

const fs = require("fs");
const path = require("path");

// --- Paths ---
const dataPath = path.resolve(__dirname, "../src/app/data/places.json");
const pagesDir = path.resolve(__dirname, "../src/app/pages/destinations");

// --- Load places data ---
if (!fs.existsSync(dataPath)) {
  console.error("❌ places.json not found at:", dataPath);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

// --- Ensure destination directory exists ---
if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });

// --- Generate pages ---
data.forEach((place) => {
  const slug = place.slug;
  const dir = path.join(pagesDir, slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  // Helper to capitalize names for class
  const className = slug
    .replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase())
    .replace(/-/g, "");

  // --- .ts file ---
  const ts = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../../components/hero/hero';
import { Info } from '../../../components/info/info';
import { Gallery } from '../../../components/gallery/gallery';
import { FooterComponent } from '../../../components/footer/footer';

@Component({
  selector: 'page-${slug}',
  standalone: true,
  imports: [CommonModule, Hero, Info, Gallery, FooterComponent],
  templateUrl: './${slug}.html',
  styleUrls: ['./${slug}.css']
})
export class ${className}Page {
  title = ${JSON.stringify(place.title)};
  subtitle = ${JSON.stringify(place.subtitle || '')};
  heroImage = ${JSON.stringify(place.heroImage || '')};
  gallery = ${JSON.stringify(place.gallery || [])};
  facts = ${JSON.stringify(place.facts || [])};
  description = ${JSON.stringify(place.description || '')};
}
`;
  fs.writeFileSync(path.join(dir, `${slug}.ts`), ts, "utf8");

  // --- .html file ---
  const html = `<app-hero [title]="title" [subtitle]="subtitle" [image]="heroImage">
  <a class="cta" routerLink="/discover">Explore More</a>
</app-hero>

<app-info title="About {{title}}" subtitle="{{subtitle}}">
  <p>{{description}}</p>
  <ul>
    <li *ngFor="let f of facts"><strong>{{f.k}}:</strong> {{f.v}}</li>
  </ul>
</app-info>

<app-gallery [images]="gallery"></app-gallery>

<app-footer></app-footer>
`;
  fs.writeFileSync(path.join(dir, `${slug}.html`), html, "utf8");

  // --- .css file ---
  const css = `:host { display: block; } /* Add page-specific style if needed */`;
  fs.writeFileSync(path.join(dir, `${slug}.css`), css, "utf8");

  console.log(`✅ Generated page: ${slug}`);
});

console.log("\n✨ All pages generated successfully!");
