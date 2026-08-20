import { Component, input } from '@angular/core';
import { HeroSection } from "../hero-section/hero-section";
import { AboutMeSection } from "../about-me-section/about-me-section";
import { SummarySection } from "../summary-section/summary-section";
import { SkillsSection } from "../skills-section/skills-section";
import { ProjectSection } from "../project-section/project-section";
import { ExperienceSection } from "../experience-section/experience-section";
import { EducationSection } from "../education-section/education-section";
import { Project } from '../../../interfaces/project.interface';
import { ContactSection } from "../contact-section/contact-section";

@Component({
  selector: 'app-main-section',
  imports: [HeroSection, AboutMeSection, SummarySection, SkillsSection, ProjectSection, ExperienceSection, EducationSection, ContactSection],
  templateUrl: './main-section.html',
})
export class MainSection { 
  name = input.required<string>();
  projects = input.required<Project[]>();
}
