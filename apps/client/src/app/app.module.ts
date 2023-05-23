import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UrlService } from './services/url.service';
import { UrlRedirectComponent } from './pages/UrlRedirect/url-redirect.component';
import { UrlShortenerComponent } from './pages/urlShortener/url-shortener.component';

const appRoutes: Routes = [
  { path: '', component: UrlShortenerComponent },
  { path: ':shortUrl', component: UrlRedirectComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    UrlRedirectComponent,
    UrlShortenerComponent,
  ],
  providers: [UrlService],
  bootstrap: [AppComponent],
})
export class AppModule {}
