import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { SearchModalComponent } from 'src/app/components/search-modal/search-modal.component';
import { TvShowRestService } from 'src/app/services/tv-show.service';

@Component({
  selector: 'app-genre-tv-shows',
  templateUrl: './genre-tv-shows.page.html',
  styleUrls: ['./genre-tv-shows.page.scss'],
})
export class GenreTvShowsPage implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal;
  public genre!: string;
  private activatedRoute = inject(ActivatedRoute);
  public showsList = Array<any>();
  searchText: string = '';
  searched: boolean = false;

  constructor(
    private tvShowRestService: TvShowRestService,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.genre = this.activatedRoute.snapshot.paramMap.get('genre') as string;
    this.cleanSearch();
  }

  getTvShowData() {
    // gets all the tv shows
    this.tvShowRestService.getShowData().subscribe((data: any) => {
      this.showsList = data
        .filter(
          (
            obj: any // filter by genre
          ) =>
            obj.genres.some(
              (g: string) => g.toLowerCase() === this.genre.toLocaleLowerCase()
            )
        )
        .slice()
        .sort((a: any, b: any) => {
          // sorts by rating
          return b.rating.average - a.rating.average;
        });
    });
  }

  cleanSearch() {
    this.searchText = '';
    this.searched = false;
    this.getTvShowData();
  }

  getTvShowDataSearch() {
    // gets the tv shows matching the search text
    this.showsList = [];
    this.tvShowRestService
      .getShowDataSearch(this.searchText)
      .subscribe((data: any) => {
        data.forEach((obj: any) => {
          this.showsList.push(obj.show);
        });
        this.searched = true;
      });
  }

  navigateToTvShowInfo(id: string) {
    this.router.navigate(['tv-show-info', id]);
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SearchModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'search') {
      this.searchText = data;
      this.getTvShowDataSearch();
    }
  }
}
