import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catremodel } from './catremodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartevisiteService {

  baseurl='http://192.168.100.12:3000/content'
  constructor(private httpclient: HttpClient) { }

  createQrCode(data:Catremodel):Observable<Catremodel>{
return this.httpclient.post<Catremodel>(this.baseurl+'/',data)
  }
getQrCode(id:string):Observable<any>{
return this.httpclient.get<Catremodel>(this.baseurl+'/affiche/'+id)
  }
getphone(ph:any):Observable<any>{
return this.httpclient.get<Catremodel>(this.baseurl+'/ph/'+ph)
  }
}
