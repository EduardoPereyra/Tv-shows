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
  public showCast: any;
  public showEpisodes: Array<any> = [];

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
        // get tv show cast by id
        this.tvShowRestService
          .getShowMoreInfoCast(this.showId)
          .subscribe((showCast: any) => {
            this.showCast = showCast;
            // get tv show episodes by id
            this.tvShowRestService
              .getShowMoreInfoEpisodes(this.showId)
              .subscribe((showEpisodes: any) => {
                this.showEpisodes = Object.values(
                  showEpisodes.reduce((acc: any, episode: any) => {
                    const seasonNumber = episode.season;
                    if (!acc[seasonNumber]) {
                      acc[seasonNumber] = {
                        season: seasonNumber,
                        episodes: [],
                      };
                    }
                    acc[seasonNumber].episodes.push(episode);
                    return acc;
                  }, {})
                );
                console.log(this.showEpisodes);
              });
          });
      });
  }
}
