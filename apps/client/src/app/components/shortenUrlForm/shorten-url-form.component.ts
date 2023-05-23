import { Component } from '@angular/core';
import { UrlService } from '../../services/url.service';
import { UrlMapping } from '@url-shortener/server-interfaces';

@Component({
  selector: 'url-shortener-shorten-url-form',
  templateUrl: './shorten-url-form.component.html',
  styleUrls: ['./shorten-url-form.component.css'],
})
export class ShortenUrlFormComponent {
  fullUrl = '';
  shortUrl = '';

  constructor(private urlService: UrlService) {}

  emptyShortUrl(_: string) {
    this.shortUrl = '';
  }

  shortenUrl() {
    this.urlService.shortenUrl(this.fullUrl).subscribe((urlMapping) => {
      this.shortUrl = urlMapping.shortUrl;
    });
  }
}
