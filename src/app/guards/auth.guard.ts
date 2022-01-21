import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//redirections
import { Router } from '@angular/router';
//services
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //condicion
    // const token = this.tokenService.getToken();

    // if(!token) {
    //   this.router.navigate(['/home']);
    //   return false;
    // }
    // return true;

    //ahora revisamos que user exista en el contexto global
    return this.authService.user$
      .pipe(
        //map se usa para transfromaciones
        map(user => {
          console.log('user: ', user)
          if(!user) {
            this.router.navigate(['/home']);
            return false;
          }

          return true;
        })
      )
  }

}
