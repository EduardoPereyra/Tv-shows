import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvShowInfoPage } from './tv-show-info.page';

const routes: Routes = [
  {
    path: '',
    component: TvShowInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowInfoPageRoutingModule {}
