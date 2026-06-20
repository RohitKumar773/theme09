import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface DropdownItem {
  name: string;
  route: string;
}

interface NavItem {
  label: string;
  link?: string;
  dropdown?: DropdownItem[];
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  isMobileMenuOpen = signal<boolean>(false);
  activeDropdown = signal<string | null>(null);

  navItems: NavItem[] = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about' },
    { label: 'Practice Area', link: '/practice' },
    {
      label: 'Insights',
      dropdown: [
        { name: 'Vision & Mission', route: '/vision' },
        { name: 'Testimonials', route: '/testimonials' },
        { name: 'Rewards', route: '/rewards' }
      ]
    },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Contact', link: '/contact' }
  ];

  toggleDropdown(label: string, event: Event): void {
    event.stopPropagation();
    this.activeDropdown.update(current => current === label ? null : label);
  }

  @HostListener('document:click')
  closeDropdowns(): void {
    this.activeDropdown.set(null);
  }
}