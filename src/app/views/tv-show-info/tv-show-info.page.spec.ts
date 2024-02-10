import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TvShowInfoPage } from './tv-show-info.page';

describe('TvShowInfoPage', () => {
  let component: TvShowInfoPage;
  let fixture: ComponentFixture<TvShowInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TvShowInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
