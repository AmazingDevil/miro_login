import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectsOverviewPage } from './projects-overview';

@NgModule({
  declarations: [
    ProjectsOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectsOverviewPage),
  ],
})
export class ProjectsOverviewPageModule {}
