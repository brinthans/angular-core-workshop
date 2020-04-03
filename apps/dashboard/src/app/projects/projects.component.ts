import { Project, ProjectsService } from '@workshop/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-core-workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  projects$;
  selectedProject: Project[];

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.getProjects();
    this.resetProject();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    }
    this.selectProject(emptyProject);
  }

  getProjects() {
    this.projects$ = this.projectService.all();    
  }

  saveProject(project) {
    if(!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.projectService.create(project.id)
      .subscribe(result => {
        this.getProjects()
        this.resetProject();
      });
  }

  updateProject(project) {

  }

  deleteProject(project) {
    this.projectService.delete(project.id)
      .subscribe(result => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }
}
