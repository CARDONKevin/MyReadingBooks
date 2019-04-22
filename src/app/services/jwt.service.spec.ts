import {inject, TestBed} from '@angular/core/testing';

import {JwtService} from './jwt.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {JwtObject} from '../models/jwt/JwtObject';


let valueOfJWT: string;
let tokenJWT: JwtObject;

describe('JwtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    valueOfJWT = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiU" ' +
      'k9MRV9DTElFTlQifV0sImlhdCI6MTU1NTk2MDc2MCwiZXhwIjoxNTU1OTY3OTYwfQ.cq8ILO-Cd7LobRUUUdtPZeJ_n-92t0Bz-c3I3wqLyEY';

    tokenJWT = { token: valueOfJWT };

  });

  it('should return a JWT', inject([HttpClient, JwtService],
    (http: HttpClient, service: JwtService) => {

      spyOn(http, 'get').and.returnValue(of(tokenJWT));

      // when
      service.getToken('test').subscribe(
        response => {
          expect(response.token).toEqual(valueOfJWT);
        });
    }));
});
