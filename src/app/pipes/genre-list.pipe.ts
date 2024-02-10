import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreList',
})
export class GenreListPipe implements PipeTransform {
  transform(genres: string[]): string {
    if (genres) {
      return genres.join(', ');
    } else {
      return '';
    }
  }
}
