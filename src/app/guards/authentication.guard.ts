import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService, SocialUser} from 'angularx-social-login';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  private loggedIn: boolean;
  private user: SocialUser;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    const token = localStorage.getItem('tokenJwt');
    if (this.getDecodedAccessToken(token).auth[0].authority === 'ROLE_CLIENT') {
      return true;
    } else {
      this.router.navigate(['home']);
      if (this.loggedIn === true) {
        this.authService.signOut();
        localStorage.clear();
      }
    }
    return false;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }


}
