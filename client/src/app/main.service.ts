import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MainService {

  constructor(private _http: Http) { }

  login(user, cb){
    this._http.post("/login", user).subscribe((response)=>{
        // console.log("hello!!!!!!!!!!!!!!!!!!", response.json());
        cb(response.json());
    });
  }

}
