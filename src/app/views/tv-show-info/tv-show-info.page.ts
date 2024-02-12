import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowRestService } from 'src/app/services/tv-show.service';
import { TVShow, TVShowData } from 'src/app/types/show';

@Component({
  selector: 'app-tv-show-info',
  templateUrl: './tv-show-info.page.html',
  styleUrls: ['./tv-show-info.page.scss'],
})
export class TvShowInfoPage implements OnInit {
  public showId!: string;
  private activatedRoute = inject(ActivatedRoute);
  public showInfo: TVShowData | undefined;

  constructor(private tvShowRestService: TvShowRestService) {}

  ngOnInit() {
    this.showId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getTvShowDetails();
  }

  getTvShowDetails() {
    // get tv show data by id
    this.tvShowRestService
      .getShowDetails(this.showId)
      .subscribe((data: TVShowData) => {
        this.showInfo = data;
      });
  }
}
