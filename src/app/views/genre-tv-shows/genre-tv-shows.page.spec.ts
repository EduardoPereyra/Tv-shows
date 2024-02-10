import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenreTvShowsPage } from './genre-tv-shows.page';

describe('GenreTvShowsPage', () => {
  let component: GenreTvShowsPage;
  let fixture: ComponentFixture<GenreTvShowsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GenreTvShowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
