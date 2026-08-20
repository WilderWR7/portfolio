import { Component, HostListener, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})
export class Header implements OnInit {
  activeSection = signal<string>('#home');
  isMobileMenuOpen = signal<boolean>(false);
  isDarkMode = signal<boolean>(true);

  urls = [
    { name: 'Inicio', path: '#home' },
    { name: 'Sobre mí', path: '#about' },
    { name: 'Habilidades', path: '#skills' },
    { name: 'Proyectos', path: '#projects' },
    { name: 'Experiencia', path: '#experience' },
    { name: 'Educación', path: '#education' },
    { name: 'Contacto', path: '#contact' }
  ];

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = savedTheme !== null ? savedTheme === 'dark' : (prefersDark || true);
      
      this.isDarkMode.set(isDark);
      this.applyTheme(isDark);
      this.onScroll();
    }
  }

  toggleTheme() {
    const newMode = !this.isDarkMode();
    this.isDarkMode.set(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    this.applyTheme(newMode);
  }

  private applyTheme(dark: boolean) {
    if (typeof document !== 'undefined') {
      if (dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(prev => !prev);
  }

  scrollToSection(event: Event, path: string) {
    event.preventDefault();
    const id = path.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      this.activeSection.set(path);
      this.isMobileMenuOpen.set(false);
    }
  }

  setActive(path: string) {
    this.activeSection.set(path);
    this.isMobileMenuOpen.set(false);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (typeof window === 'undefined') return;

    const scrollPosition = window.scrollY + 120;
    const sectionIds = this.urls.map(u => u.path.replace('#', ''));

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && el.offsetTop <= scrollPosition) {
        this.activeSection.set('#' + sectionIds[i]);
        break;
      }
    }
  }
}

