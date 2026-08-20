import { Component, inject, input } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';
import { ProjectModalService } from '../../../services/project-modal.service';

@Component({
  selector: 'project-section',
  imports: [],
  templateUrl: './project-section.html',
})
export class ProjectSection {
  projects = input.required<Project[]>();
  modalService = inject(ProjectModalService);

  openProject(project: Project) {
    this.modalService.open(project);
  }
}

