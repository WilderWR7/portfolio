import { Component } from '@angular/core';

@Component({
  selector: 'about-me-section',
  imports: [],
  templateUrl: './about-me-section.html',
})
export class AboutMeSection {
  about = {
    title: "Sobre Mí",
    description: "Desarrollador Web Full Stack con más de 2 años de experiencia en el diseño, mantenimiento y optimización de aplicaciones web escalables para clientes internacionales. Utilizando tecnologías como: JavaScript/TypeScript (React, Next.js, NestJS) y PHP (Laravel), con fuerte enfoque en la lógica del lado del servidor (backend) y resolución de problemas complejos.\n\nExperiencia práctica trabajando con arquitecturas basadas en contenedores (Docker) e integrando servicios en la nube (AWS). Busco aportar mis habilidades técnicas en un equipo dinámico, creando soluciones eficientes y estables.",
    stats: [
      { label: "Años de Experiencia", value: "2+" },
      { label: "Proyectos Corporativos", value: "3" },
      { label: "Educación", value: "UMSA" }
    ]
  };
}
