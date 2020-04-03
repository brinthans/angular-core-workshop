import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from 'libs/material/src/lib/material.module';


@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
