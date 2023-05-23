import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { ShortenUrlFormComponent } from './components/shortenUrlForm/shorten-url-form.component';
import { UrlService } from './services/url.service';
import { UrlRedirectComponent } from './pages/url-redirect/url-redirect.component';
import { ShortenUrlComponent } from './pages/shorten-url/shorten-url.component';

const appRoutes: Routes = [{ path: '', component: ShortenUrlFormComponent }];
@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HeaderComponent,
    ShortenUrlFormComponent,
    UrlRedirectComponent,
    ShortenUrlComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [UrlService],
  bootstrap: [AppComponent],
})
export class AppModule {}
