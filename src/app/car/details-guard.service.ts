import { Injectable } from '@angular/core';
import { CheckingService } from './checking.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DetailsGuardService implements CanActivate {

  constructor(
    private check: CheckingService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.check.token().length > 2;
  }
}