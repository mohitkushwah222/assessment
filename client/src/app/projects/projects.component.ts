import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [];
  employees = [];
  logtime = [];
  totalTime = 0;
  totalEstimate = 0;
  filteredList = [];
  selectedProject = '';
  selectedEmployee = '';
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getEmployees().subscribe(res => {
      this.employees = res['data']
    })
    this.apiService.getProjects().subscribe(res => {
      this.projects = res['data']
    })
    this.apiService.getLogtime().subscribe(res => {
      this.logtime = res['data'];
      this.filteredList = this.logtime;
      this.getTotalTime(this.logtime);
    })
  }

  selectProject(e) {
    this.selectedEmployee = '';
    console.log(e);
    if (e === 'Select') {
      this.filteredList = this.logtime;
    } else {
      this.filteredList = this.logtime.filter(ele => {
        return ele.project === e
      })
    }
    this.getTotalTime(this.filteredList);
  }

  selectEmployee(e) {
    this.selectedProject = '';
    console.log(e);
    if (e === 'Select') {
      this.filteredList = this.logtime;
    } else {
      this.filteredList = this.logtime.filter(ele => {
        return ele.employee === e
      })
    }
    this.getTotalTime(this.filteredList);
  }

  getTotalTime(list) {
    this.totalTime = 0;
    this.totalEstimate = 0;
    list.forEach(ele => {
      this.totalTime += parseInt(ele.time)
      var project = this.projects.find(p => p.name === ele.project);
      if (project) {
        this.totalEstimate += parseInt(project.totalEstimate)
      }
    })
  }

}
