import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreList',
})
export class GenreListPipe implements PipeTransform {
  // makes a list of elements separated by ","
  transform(genres: string[] | undefined): string {
    if (genres) {
      return genres.join(', ');
    } else {
      return '';
    }
  }
}
