import { ProjectsService } from './projects/projects.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule],
  providers: [
    ProjectsService,
    HttpClientModule
  ]
})
export class CoreDataModule {}
