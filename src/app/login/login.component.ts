import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  onLogin(email: string, password: string) {
    if(email === 'codekul' && password === 'codekul') {
      this.router.navigate(['user','100'],{queryParams : {speed:100}});
    }
  }
}
