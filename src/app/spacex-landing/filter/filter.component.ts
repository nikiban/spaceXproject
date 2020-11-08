import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filterInput: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public applyFilter(type, val) {
    this.filterInput[type].active = val;
    let param: any;
    param = {};
    let paramList = ['year', 'islaunch', 'islanding'];
    paramList.map((item) => {
      if (this.filterInput[item].active) {
        param[item] = this.filterInput[item].active
      }
    })
    this.router.navigate(['/spaceXLanding'], { queryParams: param });
  }
}
