import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'url-shortener-url-redirect',
  templateUrl: './url-redirect.component.html',
  styleUrls: ['./url-redirect.component.css'],
})
export class UrlRedirectComponent implements OnInit {
  constructor(private route: ActivatedRoute, private urlService: UrlService) {}

  ngOnInit(): void {
    const shortUrl = this.route.snapshot.paramMap.get('shortUrl');
    if (!shortUrl) {
      return;
    }

    try {
      this.urlService
        .getFullUrl(shortUrl)
        .subscribe((urlMapping) => (window.location.href = urlMapping.fullUrl));
    } catch (err) {
      console.log(err);
    }
  }
}
