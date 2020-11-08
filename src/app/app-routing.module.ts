import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpacexLandingComponent } from './spacex-landing/spacex-landing.component';

const routes: Routes = [
  { path: 'spaceXLanding', component: SpacexLandingComponent },
  { path: '*', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
