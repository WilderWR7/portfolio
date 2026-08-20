import { Component } from '@angular/core';

@Component({
  selector: 'skills-section',
  imports: [],
  templateUrl: './skills-section.html',
})
export class SkillsSection {
  skills = [
    { name: "JavaScript / TypeScript", percentage: 90, color: "#F7DF1E" },
    { name: "React / Next.js", percentage: 85, color: "#61DAFB" },
    { name: "NestJS / Node.js", percentage: 80, color: "#E0234E" },
    { name: "PHP / Laravel", percentage: 85, color: "#FF2D20" },
    { name: "Docker / AWS", percentage: 75, color: "#2496ED" },
    { name: "SQL & C#", percentage: 70, color: "#239120" }
  ];
}
