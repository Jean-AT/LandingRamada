import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();
  newsletterEmail = '';

  onNewsletterSubmit(): void {
    console.log('Newsletter subscription:', this.newsletterEmail);
    this.newsletterEmail = '';
  }
}
