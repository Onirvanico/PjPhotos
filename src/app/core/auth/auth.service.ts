import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token-service';

const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private token: TokenService) { }

  authenticate(userName: string, password: string) {
    return this.http.post(API_URL + 'user/login', { userName: userName, password: password },
                            { observe: 'response' })
                            .pipe(tap( res => {
                              const authToken = res.headers.get('x-access-token');
                              this.token.setToken(authToken);
                              alert(`User ${userName} authenticated  with token ${authToken});
                            }))
  }
}

