import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
   
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url=environment.baseUrl
  token: any;
  constructor(private httpClient:HttpClient) { }

  login(email:string,password:string):Observable<User>{
    
    
    return this.httpClient.post<User>(`${this.url}/login`,{email,password})

}
register (user:User):Observable<User>{
  console.log(user);
  return this.httpClient.post<User>(`${this.url}/register`,user)
}
isLogin():boolean{
  if (this.token==='user') {
   return true
  } 
  else{
   return false
  }
  }
}