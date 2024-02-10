import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowRestService } from 'src/app/services/tv-show.service';

@Component({
  selector: 'app-tv-show-info',
  templateUrl: './tv-show-info.page.html',
  styleUrls: ['./tv-show-info.page.scss'],
})
export class TvShowInfoPage implements OnInit {
  public showId!: string;
  private activatedRoute = inject(ActivatedRoute);
  public showInfo: any;

  constructor(private tvShowRestService: TvShowRestService) {}

  ngOnInit() {
    this.showId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getTvShowData();
  }

  getTvShowData() {
    this.tvShowRestService
      .getShowDetails(this.showId)
      .subscribe((data: any) => {
        console.log(data);
        this.showInfo = data;
      });
  }

  playTvShow() {}
}
