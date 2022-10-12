import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    alert("ok")
    this.Deactivate();
  }

  isValue=false;

  Deactivate():Observable<boolean> | boolean {
    if(this.isValue){
      window.alert("there are unsaved changes! Are you sure?")
      return true;
    }

    return false;
  }

}
