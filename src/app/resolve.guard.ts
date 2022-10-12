import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

  userData={
    "username" :"sabana",
    "password" :"yasmine",
    "contact" : "122334"
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userData;
  }
  
  }
