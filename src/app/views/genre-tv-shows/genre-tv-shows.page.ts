import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvShowRestService } from 'src/app/services/tv-show.service';

@Component({
  selector: 'app-genre-tv-shows',
  templateUrl: './genre-tv-shows.page.html',
  styleUrls: ['./genre-tv-shows.page.scss'],
})
export class GenreTvShowsPage implements OnInit {
  public genre!: string;
  private activatedRoute = inject(ActivatedRoute);
  public showsList = Array<any>();

  constructor(
    private tvShowRestService: TvShowRestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.genre = this.activatedRoute.snapshot.paramMap.get('genre') as string;
    this.getTvShowData();
  }

  getTvShowData() {
    this.tvShowRestService.getShowData().subscribe((data: any) => {
      this.showsList = data
        .filter((obj: any) =>
          obj.genres.some(
            (g: string) => g.toLowerCase() === this.genre.toLocaleLowerCase()
          )
        )
        .slice()
        .sort((a: any, b: any) => {
          return b.rating.average - a.rating.average;
        });
      console.log(this.showsList);
    });
  }

  navigateToTvShowInfo(id: string) {
    this.router.navigate(['tv-show-info', id]);
  }
}
