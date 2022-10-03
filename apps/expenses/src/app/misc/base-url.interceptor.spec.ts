import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BaseUrlInterceptor } from './base-url.interceptor';
import { HttpClient } from '@angular/common/http';

describe('BaseUrlInterceptor', () => {
  let httpService: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BaseUrlInterceptor,
        { provide: 'BASE_API_URL', useValue: 'http://testing:8080/api' },
      ],
    });
    httpMock = TestBed.get(HttpTestingController);
    httpService = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    const interceptor: BaseUrlInterceptor = TestBed.inject(BaseUrlInterceptor);
    expect(interceptor).toBeTruthy();
  });

  xit('should add url path', () => {
    httpService.get('/hello').subscribe((response) => {
      expect(response).toBeTruthy();
    });
    const httpRequest = httpMock.expectOne('http://testing:8080/api/hello');

    expect(httpRequest.request.url).toEqual('http://testing:8080/api/hello');
  });
});
