import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { ShortenUrlFormComponent } from './components/shortenUrlForm/shorten-url-form.component';
import { UrlService } from './services/url.service';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HeaderComponent,
    ShortenUrlFormComponent,
  ],
  imports: [BrowserModule],
  providers: [UrlService],
  bootstrap: [AppComponent],
})
export class AppModule {}
