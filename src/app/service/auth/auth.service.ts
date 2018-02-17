import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Apiconstant } from '../../constant/apiconstant';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
  	var body = new Object();
  	body['email'] = email;
  	body['password'] = password;
    var options = new Object();
    // options['headers'] = new HttpHeaders().set(); 
  	return this.http.post(Apiconstant.BASE_URL+Apiconstant.LOGIN,body);
  }

  logout(){

  }

  register(email: string, name:string, password: string){
  	var body = new Object();
  	body[email] = email;
  	body[name] = name;
  	body[password] = password; 
  	return this.http.post(Apiconstant.BASE_URL+Apiconstant.REGISTER,body);
  }

}
