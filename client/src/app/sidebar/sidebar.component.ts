import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menu = [
    {
      label: 'Dashboard',
      icon: 'fa fa-home',
      route: 'logtime'
    },
    {
      label: 'Employees',
      icon: 'fa fa-file-o',
      route: 'employees'
    },
    {
      label: 'Projects',
      icon: 'fa fa-shopping-cart',
      route: 'projects'
    },
  ]
  activeMenu = this.menu[0].label;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  redirect(route, menuItem) {
    this.activeMenu = menuItem;
    this.router.navigate([route])
  }

}
