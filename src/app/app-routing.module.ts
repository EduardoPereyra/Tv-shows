import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'genre/action',
    pathMatch: 'full',
  },
  {
    path: 'genre/:genre',
    loadChildren: () =>
      import('./views/genre-tv-shows/genre-tv-shows.module').then(
        (m) => m.GenreTvShowsPageModule
      ),
  },
  {
    path: 'tv-show-info/:id',
    loadChildren: () =>
      import('./views/tv-show-info/tv-show-info.module').then(
        (m) => m.TvShowInfoPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
