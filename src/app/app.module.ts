import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpacexLandingComponent } from './spacex-landing/spacex-landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilterComponent } from './spacex-landing/filter/filter.component';
import { ContentComponent } from './spacex-landing/content/content.component';
import { DataService } from './spacex-landing/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    SpacexLandingComponent,
    NotFoundComponent,
    FilterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
