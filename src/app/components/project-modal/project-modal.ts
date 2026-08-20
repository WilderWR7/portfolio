import { Component, HostListener, inject, input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ProjectModalService } from '../../services/project-modal.service';

@Component({
  selector: 'project-modal',
  imports: [],
  templateUrl: './project-modal.html',
})
export class ProjectModal {
  modalService = inject(ProjectModalService);
  projectInput = input<Project | null>(null);

  get currentProject(): Project | null {
    return this.projectInput() || this.modalService.selectedProject();
  }

  close() {
    this.modalService.close();
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.close();
  }
}

