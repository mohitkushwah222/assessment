import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-logtime',
  templateUrl: './logtime.component.html',
  styleUrls: ['./logtime.component.scss']
})
export class LogtimeComponent implements OnInit {
  projects = [];
  employees = [];
  formGroup: FormGroup;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      date: new FormControl(null, [Validators.required]),
      time: new FormControl(null, [Validators.required]),
      project: new FormControl(null, [Validators.required]),
      employee: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
    this.apiService.getEmployees().subscribe(res => {
      console.log(res);
      this.employees = res['data']
    })
    this.apiService.getProjects().subscribe(res => {
      console.log(res);
      this.projects = res['data']
    })
  }

  submit() {
    this.apiService.createLogtime(this.formGroup.value).subscribe(res => {
      console.log(res)
    });
  }

}
