import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenreTvShowsPage } from './genre-tv-shows.page';

const routes: Routes = [
  {
    path: '',
    component: GenreTvShowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenreTvShowsPageRoutingModule {}
