import { Component } from '@angular/core';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'url-shortener-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.css'],
})
export class ShortenUrlComponent {
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
