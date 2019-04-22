import {Component, OnInit} from '@angular/core';
import {AuthService, FacebookLoginProvider, SocialUser} from 'angularx-social-login';
import {JwtService} from '../../services/jwt.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtObject} from '../../models/jwt/JwtObject';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: AuthService, private jwtService: JwtService, private http: HttpClient) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (user != null) {
        this.getJWT(user.name).subscribe(sub =>
          localStorage.setItem('tokenJwt', sub.token));
      }
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    localStorage.clear();
  }

  public getJWT(name: string): Observable<JwtObject> {
    const URL_JWT_USER = 'https://my-reading-books-back-dev.herokuapp.com/signin/';

    const httpOptions = {
      headers: new HttpHeaders({
          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
          Authorization: ' Bearer eyJhbGciO' +
            'iJIUzI1NiJ9.eyJzdWIiOiJrZXYiLCJhdXRoIjpbeyJhdXRob3JpdHkiOiJST0xFX0NMSUVOVCJ9XSwi' +
            'aWF0IjoxNTU1OTI2OTg1LCJleHAiOjE1NTU5MzQxODV9.IVnb2FvENXWjZQ1u4O_DQis6Wda11ZIqJ1QgYQfrf0U',
          responseType: 'text'

        }
      )
    };

    return this.http.get<any>(URL_JWT_USER +
      name.replace(/[ÿ]/g, 'y').replace(/[Ññ]/g, 'n')
        .replace(/[ÙÚÛÜùúûü]/g, 'u').replace(/[ÌÍÎÏìíîï]/g, 'i')
        .replace(/[Çç]/g, 'c').replace(/[ÒÓÔÕÖØòóôõöø]/g, 'o')
        .replace(' ', '').replace(/[ÈÉÊËèéêë]/g, 'e')
        .replace(/[ÀÁÂÃÄÅàáâãäå]/g, 'a')
      , httpOptions);
  }

}
