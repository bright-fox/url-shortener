import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlRedirectComponent } from './url-redirect.component';
import { UrlService } from '../../services/url.service';
import { RouterTestingModule } from '@angular/router/testing';

jest.mock('../../services/url.service');

describe('UrlRedirectComponent', () => {
  let component: UrlRedirectComponent;
  let fixture: ComponentFixture<UrlRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [UrlService],
      declarations: [UrlRedirectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UrlRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
