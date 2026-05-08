import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  links = [
    { label: 'Productos', href: '#product' },
    { label: 'Servicios', href: '#service' },
    { label: 'Contactanos', href: '#contact' },
  ];

  onNavClick(event: Event, href: string): void {
    event.preventDefault();

    const targetId = href.startsWith('#') ? href.slice(1) : href;
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const navbarOffset = 96;
    const startY = window.scrollY;
    const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navbarOffset);
    const distance = targetY - startY;
    const duration = 900;
    const startTime = performance.now();

    const easeInOutCubic = (t: number): number =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}
