import { Component, input } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';

@Component({
  selector: 'project-section',
  imports: [],
  templateUrl: './project-section.html',
})
export class ProjectSection {
  projects = input.required<Project[]>();
}
