import { Component } from '@angular/core';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'url-shortener-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css'],
})
export class UrlShortenerComponent {
  fullUrl = '';
  shortUrl = '';

  constructor(private urlService: UrlService) {}

  emptyShortUrl(_: any) {
    this.shortUrl = '';
  }

  shortenUrl() {
    this.urlService.shortenUrl(this.fullUrl).subscribe((urlMapping) => {
      this.shortUrl = urlMapping.shortUrl;
    });
  }
}
