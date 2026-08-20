import { Component } from '@angular/core';

@Component({
  selector: 'contact-section',
  imports: [],
  templateUrl: './contact-section.html',
})
export class ContactSection {
  contact = {
    email: "wilder.mayta91@gmail.com",
    location: "La Paz - Bolivia",
    availability: "Disponible para integrarse a equipos dinámicos y proyectos desafiantes."
  }
}
