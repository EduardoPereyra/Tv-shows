import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GenreTvShowsPage } from './genre-tv-shows.page';
import { TvShowRestService } from 'src/app/services/tv-show.service';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { of } from 'rxjs';
import { TVShowData } from 'src/app/types/show';

describe('GenreTvShowsPage', () => {
  let component: GenreTvShowsPage;
  let fixture: ComponentFixture<GenreTvShowsPage>;
  let mockTvShowRestService: any;
  let mockShowData: TVShowData[];
  let mockSearchData: TVShowData[];

  // beforeEach(waitForAsync(() => {
  //   let mockTvShowRestService = {
  //     getTvShowsData: () => {},
  //     getTvShowsDataSearch: () => {},
  //   };

  //   TestBed.configureTestingModule({
  //     declarations: [GenreTvShowsPage],
  //     imports: [IonicModule.forRoot(), RouterTestingModule],
  //     providers: [
  //       { provide: TvShowRestService, useValue: mockTvShowRestService },
  //       ModalController,
  //     ],
  //   }).compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(GenreTvShowsPage);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   // Sample mock data for testing
  //   mockShowData = [
  //     {
  //       id: 1,
  //       url: 'https://www.tvmaze.com/shows/1/under-the-dome',
  //       name: 'Under the Dome',
  //       type: 'Scripted',
  //       language: 'English',
  //       genres: ['Drama', 'Science-Fiction', 'Thriller'],
  //       status: 'Ended',
  //       runtime: 60,
  //       averageRuntime: 60,
  //       premiered: '2013-06-24',
  //       ended: '2015-09-10',
  //       officialSite: 'http://www.cbs.com/shows/under-the-dome/',
  //       schedule: {
  //         time: '22:00',
  //         days: ['Thursday'],
  //       },
  //       rating: {
  //         average: 6.5,
  //       },
  //       weight: 98,
  //       network: {
  //         id: 2,
  //         name: 'CBS',
  //         country: {
  //           name: 'United States',
  //           code: 'US',
  //           timezone: 'America/New_York',
  //         },
  //         officialSite: 'https://www.cbs.com/',
  //       },
  //       webChannel: null,
  //       dvdCountry: null,
  //       externals: {
  //         tvrage: 25988,
  //         thetvdb: 264492,
  //         imdb: 'tt1553656',
  //       },
  //       image: {
  //         medium:
  //           'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
  //         original:
  //           'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
  //       },
  //       summary:
  //         "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
  //       updated: 1704794065,
  //     },
  //   ];
  //   mockSearchData = [
  //     {
  //       id: 2,
  //       url: 'https://www.tvmaze.com/shows/2/sample-show',
  //       name: 'Sample Show',
  //       type: 'Sample Type',
  //       language: 'English',
  //       genres: ['Comedy'],
  //       status: 'Ongoing',
  //       runtime: 30,
  //       averageRuntime: 30,
  //       premiered: '2022-01-01',
  //       ended: undefined,
  //       officialSite: 'http://www.example.com/sample-show/',
  //       schedule: {
  //         time: '20:00',
  //         days: ['Monday'],
  //       },
  //       rating: {
  //         average: 8.0,
  //       },
  //       weight: 75,
  //       network: {
  //         id: 1,
  //         name: 'ABC',
  //         country: {
  //           name: 'United States',
  //           code: 'US',
  //           timezone: 'America/New_York',
  //         },
  //         officialSite: 'https://www.abc.com/',
  //       },
  //       webChannel: null,
  //       dvdCountry: 'US',
  //       externals: {
  //         tvrage: 12345,
  //         thetvdb: 67890,
  //         imdb: 'tt987654',
  //       },
  //       image: {
  //         medium: 'https://example.com/images/sample-medium.jpg',
  //         original: 'https://example.com/images/sample-original.jpg',
  //       },
  //       summary: '<p>This is a sample show for testing purposes.</p>',
  //       updated: 1704794065,
  //     },
  //   ];
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should call getTvShowsData on ngOnInit', () => {
  //   spyOn(component, 'getTvShowsData');
  //   expect(component.getTvShowsData).toHaveBeenCalled();
  // });

  // it('should call getTvShowsData and filter by genre on getTvShowsData', () => {
  //   spyOn(mockTvShowRestService, 'getTvShowsData').and.returnValue({
  //     subscribe: () => {},
  //   });

  //   component.getTvShowsData();

  //   expect(mockTvShowRestService.getTvShowsData).toHaveBeenCalled();
  //   expect(component.showsList).toEqual(mockShowData);
  // });

  // it('should call getTvShowsDataSearch on getTvShowsDataSearch', () => {
  //   spyOn(mockTvShowRestService, 'getTvShowsDataSearch').and.returnValue({
  //     subscribe: () => {},
  //   });

  //   component.getTvShowsDataSearch();

  //   expect(mockTvShowRestService.getTvShowsDataSearch).toHaveBeenCalled();
  //   expect(component.showsList).toEqual(mockSearchData);
  //   expect(component.searched).toBe(true);
  // });

  // it('should reset searchText and call getTvShowsData on cleanSearch', () => {
  //   spyOn(component, 'getTvShowsData');
  //   component.cleanSearch();
  //   expect(component.searchText).toBe('');
  //   expect(component.searched).toBe(false);
  //   expect(component.getTvShowsData).toHaveBeenCalled();
  // });
});
