import { Injectable, signal } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectModalService {
  selectedProject = signal<Project | null>(null);

  open(project: Project) {
    this.selectedProject.set(project);
    if (typeof document !== 'undefined') {
      document.body.classList.add('overflow-hidden');
    }
  }

  close() {
    this.selectedProject.set(null);
    if (typeof document !== 'undefined') {
      document.body.classList.remove('overflow-hidden');
    }
  }
}
