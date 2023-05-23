import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [UrlService],
  bootstrap: [AppComponent],
})
export class AppModule {}
