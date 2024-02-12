import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TvShowRestService } from './services/tv-show.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let genres: Array<string>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [TvShowRestService], // Add your service or mock here if needed
    }).compileComponents();
    genres = [
      'Action',
      'Adventure',
      'Anime',
      'Comedy',
      'Crime',
      'Drama',
      'Espionage',
      'Family',
      'Fantasy',
      'History',
      'Horror',
      'Legal',
      'Medical',
      'Music',
      'Mystery',
      'Romance',
      'Science-Fiction',
      'Sports',
      'Supernatural',
      'Thriller',
      'War',
      'Western',
    ];
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTvShowGenres on ngOnInit', () => {
    spyOn(component, 'getTvShowGenres');
    component.ngOnInit();
    expect(component.getTvShowGenres).toHaveBeenCalled();
  });

  // it('should populate appPages with genres on getTvShowGenres', () => {
  //   component.getTvShowGenres();
  //   expect(component.appPages.length).toBe(genres.length);

  //   genres.forEach((genre, index) => {
  //     expect(component.appPages[index].title).toBe(genre);
  //     expect(component.appPages[index].url).toBe(
  //       `/genre/${genre.toLowerCase()}`
  //     );
  //     expect(component.appPages[index].icon).toBe('film');
  //   });
  // });
});
