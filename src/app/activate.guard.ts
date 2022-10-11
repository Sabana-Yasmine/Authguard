import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SampleService } from './sample.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate, CanActivateChild {

  constructor(private service:SampleService, private router : Router){


  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   if(this.service.isAdmin()){
    window.alert("Welcome Admin!!!")
    this.router.navigate(['/login']);
    return true;
   }else{
    window.alert("you have no access");
    return false;
   }
  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.service.islogin()){
        window.alert("Successfully login");
        this.router.navigate(['/home']);
        return true;
      }else{
        window.alert("Authentication required");
        return false
      }
  }



}
