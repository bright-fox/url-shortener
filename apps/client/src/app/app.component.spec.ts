import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UrlShortenerComponent } from './pages/urlShortener/url-shortener.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, HeaderComponent, UrlShortenerComponent],
    }).compileComponents();
  });

  it('should create app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
