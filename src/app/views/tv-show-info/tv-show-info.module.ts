import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvShowInfoPageRoutingModule } from './tv-show-info-routing.module';

import { TvShowInfoPage } from './tv-show-info.page';
import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe';
import { GenreListPipe } from 'src/app/pipes/genre-list.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvShowInfoPageRoutingModule,
  ],
  declarations: [TvShowInfoPage, SafeHtmlPipe, GenreListPipe],
})
export class TvShowInfoPageModule {}
