import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  // sanitizer for safe html
  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string | undefined): SafeHtml {
    if (html) {
      return this.sanitizer.bypassSecurityTrustHtml(html);
    } else {
      return this.sanitizer.bypassSecurityTrustHtml('');
    }
  }
}
