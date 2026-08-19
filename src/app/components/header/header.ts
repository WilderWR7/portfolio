import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})
export class Header {
  urls = [
    { name: 'Inicio', path: '#home' },
    { name: 'Sobre mí', path: '#about' },
    { name: 'Habilidades', path: '#skills' },
    { name: 'Proyectos', path: '#projects' },
    { name: 'Experiencia', path: '#experience' },
    { name: 'Educación', path: '#education' },
    { name: 'Contacto', path: '#contact' }
  ];
}
