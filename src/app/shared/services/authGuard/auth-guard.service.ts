import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): Promise<boolean> {
    return this.auth.isSmallBatchDevsLoggedIn().then(isLoggedIn => {
      if (!isLoggedIn) {
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }
    });
  }
}
