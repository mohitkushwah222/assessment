import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeesComponent } from './employees/employees.component';
import { LogtimeComponent } from './logtime/logtime.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "logtime",
    pathMatch: "full"
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'logtime',
    component: LogtimeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
