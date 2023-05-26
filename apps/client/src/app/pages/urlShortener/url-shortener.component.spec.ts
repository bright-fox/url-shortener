import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlShortenerComponent } from './url-shortener.component';
import { UrlService } from '../../services/url.service';
import { FormsModule } from '@angular/forms';

jest.mock('../../services/url.service');

describe('UrlShortenerComponent', () => {
  let component: UrlShortenerComponent;
  let fixture: ComponentFixture<UrlShortenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [UrlService],
      declarations: [UrlShortenerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UrlShortenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
