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
      this.logtime = res['data']
      this.logtime.forEach(ele => {
        this.totalTime += parseInt(ele.time)
      })
    })
  }

}
