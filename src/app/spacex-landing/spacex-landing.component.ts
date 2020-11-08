import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-spacex-landing',
  templateUrl: './spacex-landing.component.html',
  styleUrls: ['./spacex-landing.component.scss']
})
export class SpacexLandingComponent implements OnInit {
  public spaceData: any;
  public subscriptions: any;
  constructor(private aRoute: ActivatedRoute, private APIservice: DataService, private router: Router) {
    this.initializeDashboardData();
  }

  ngOnInit() {
    this.aRoute.queryParams.subscribe((data) => {
      this.initializeDashboardData();
      // For landing Page
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        // Gets all data
        this.subscriptions = this.APIservice.getAllData().subscribe((spaceData) => {
          if (spaceData.length == 0) {
            this.spaceData.contentData.noDataFound = true;
          } else {
            this.setSpaceData(spaceData)
          }
        })
      } else { // When filter is applied
        for (let params in data) {
          if (this.spaceData.filterData.hasOwnProperty(params)) {
            let paramVal = params == 'year' ? Number(data[params]) : data[params];
            if (this.spaceData.filterData[params].list.includes(paramVal)) {
              this.spaceData.filterData[params].active = data[params];
            } else {
              this.spaceData.filterData[params].active = undefined;
            }
          }
        }
        // get filtered Data
        this.subscriptions = this.APIservice.getFilteredData(data).subscribe((filterData) => {
          if (filterData.length == 0) {
            this.spaceData.contentData.noDataFound = true;
          } else {
            this.setSpaceData(filterData)
          }
        })
      }
    })
  }

  // formatting data for the page
  public setSpaceData(spaceData) {
    this.spaceData.contentData.list = [];
    this.spaceData.contentData.noDataFound = false;
    spaceData.map((item) => {
      this.spaceData.contentData.list.push({
        mission_name: item.hasOwnProperty('mission_name') ? item.mission_name : undefined,
        flight_number: item.hasOwnProperty('flight_number') ? item.flight_number : undefined,
        mission_id: item.hasOwnProperty('mission_id') ? item.mission_id : undefined,
        launch_year: item.hasOwnProperty('launch_year') ? item.launch_year : undefined,
        launch_success: item.hasOwnProperty('launch_success') ? item.launch_success : undefined,
        land_success: item.hasOwnProperty('land_success') ? item.land_success : undefined,
        image: item.links.mission_patch
      })
    })
  }

  // initializing the space data
  public initializeDashboardData() {
    this.spaceData = {
      filterData: {
        year: {
          list: Array.from(Array(15), (_, i) => i + 2006),
          active: undefined
        },
        islaunch: {
          list: ['true', 'false'],
          active: undefined
        },
        islanding: {
          list: ['true', 'false'],
          active: undefined
        }
      },
      contentData: {
        list: [],
        noDataFound: false
      }
    }
    if (this.subscriptions) {
      this.subscriptions.unsubscribe()
    }
  }

  // Redirecting to the landing page
  public redirectToLanding() {
    this.router.navigate(['/spaceXLanding']);
  }

}
