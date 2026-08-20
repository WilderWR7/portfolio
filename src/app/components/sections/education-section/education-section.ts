import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'education-section',
  imports: [],
  templateUrl: './education-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationSection {
  educations = [
    {
      degree: "Licenciado en Informática",
      institution: "Universidad Mayor de San Andrés (UMSA)",
      period: "Graduado en 2024"
    }
  ];
  certifications = [
    {
      name: "Desarrollo Web Completo con html5, css3, js ajax php y mysql",
      platform: "Udemy"
    },
    {
      name: "React: De cero a experto ( Hooks y MERN )",
      platform: "Udemy"
    },
    {
      name: "React Native: Aplicaciones nativas para IOS y Android",
      platform: "Udemy"
    },
    {
      name: "Next.js: El framework de React para producción",
      platform: "Udemy"
    },
    {
      name: "Nest: Desarrollo backend escalable con Node",
      platform: "Udemy"
    },
    {
      name: "Fundamentos del desarrollo web: Full Stack o Front-end",
      platform: "LinkedIn"
    }
  ];
}
