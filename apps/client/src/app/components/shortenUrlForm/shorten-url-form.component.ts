import { Component } from '@angular/core';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'url-shortener-shorten-url-form',
  templateUrl: './shorten-url-form.component.html',
  styleUrls: ['./shorten-url-form.component.css'],
})
export class ShortenUrlFormComponent {
  constructor(private urlService: UrlService) {}

  shortenUrl() {
    this.urlService.shortenUrl();
    console.log('Shorten URL');
  }
}
