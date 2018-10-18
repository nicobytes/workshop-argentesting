import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { UsersService } from './users.service';

describe('UsersService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  describe('Test for getUser', () => {

    it('shuld return an user', inject([UsersService], (service: UsersService) => {

      const expectResponse = 1;

      service.getUser('1')
      .subscribe(data => {
        expect(data).toEqual(expectResponse);
      });

      const req = httpTestingController.expectOne('http://jsonplaceholder.typicode.com/users/1');
      expect(req.request.method).toEqual('GET');
      req.flush(expectResponse);
    }));
  });
});
