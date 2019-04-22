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
    return this.jwtService.getToken(name);
  }

}
