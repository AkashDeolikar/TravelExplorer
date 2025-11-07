import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="site-footer">
      <div class="container">
        <div class="brand">TravelExplore</div>
        <nav class="links">
          <a routerLink="/about">About</a>
          <a routerLink="/discover">Discover</a>
          <a routerLink="/privacy">Privacy</a>
        </nav>
        <div class="copyright">© {{ year }} TravelExplore</div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer{ padding:3rem 1rem; background:#fff; color:#6b7280; border-top:1px solid #eef2f6; text-align:center;}
    .site-footer .brand{ font-weight:700; margin-bottom:.6rem; }
    .site-footer .links{ display:flex; gap:1rem; justify-content:center; margin-bottom:.6rem; }
    .site-footer a{ color:inherit; text-decoration:none; font-weight:500; }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
