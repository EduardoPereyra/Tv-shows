import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenreTvShowsPageRoutingModule } from './genre-tv-shows-routing.module';

import { GenreTvShowsPage } from './genre-tv-shows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenreTvShowsPageRoutingModule
  ],
  declarations: [GenreTvShowsPage]
})
export class GenreTvShowsPageModule {}
