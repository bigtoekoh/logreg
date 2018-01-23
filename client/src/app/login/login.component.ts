import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user:object

  constructor(private _mainService: MainService) {
    this.user = {name: ''}
  }


  login(){
    // console.log(this.user);
    this._mainService.login(this.user, (data)=>{
        console.log(data, "login component page");
    });
  }

  ngOnInit() {
  }

}
