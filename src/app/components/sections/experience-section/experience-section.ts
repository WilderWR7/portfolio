import { Component } from '@angular/core';

@Component({
  selector: 'experience-section',
  imports: [],
  templateUrl: './experience-section.html',
})
export class ExperienceSection {
  experience = [
    {
      period: "Diciembre 2023 - Marzo 2026",
      role: "Desarrollador Full Stack / Backend",
      company: "BTSOFT",
      description: "Asignado a múltiples proyectos de gran escala para clientes internacionales (Open Mundo, Open English Junior y Serena & Lily). Soporte a plataformas de producción, resolución de problemas críticos en producción, desarrollo de nuevas características backend e integración de servicios en la nube (AWS) y bases de datos."
    }
  ]
}
