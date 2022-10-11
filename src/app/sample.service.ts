import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  role:string="Admin";
  constructor() { }

  auth = 1 ;
  islogin():boolean{
    if(this.auth==0){
      return true;
    }else{
      return false;
    }
  }

  isAdmin():boolean{
    if(this.role == "Admin"){
      return true;
    }else{
      return false;
    }
  }
}
