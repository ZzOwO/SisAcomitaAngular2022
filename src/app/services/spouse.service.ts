import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spouse } from '../models/spouse';

@Injectable({
  providedIn: 'root'
})
export class SpouseService {

  selectSpouse:Spouse=new Spouse();
  reqHeader=new HttpHeaders({
    'Content-Type':'aplication/json',
  })

  constructor(private http:HttpClient) { }
  baseurl = 'http://127.0.0.1:8000/api';

  //metodo get
  GetSpouses():Observable<Spouse>{
    return this.http.get<Spouse>(this.baseurl+'/spouses/');
  }
  //metodo post
  CreateSpouse(spouse:Spouse):Observable<Spouse>{
    return this.http.post(this.baseurl+'/spouses/', spouse,{headers:this.reqHeader})
  }

  //metodo delete
  DeleteSpouse(id:number){
    return this.http.delete(this.baseurl+'/spouses/'+id+'/');
  }

  //metodo update
  UpdateSpouse(id:number, spouse:Spouse){
    return this.http.put(this.baseurl+'/spouses/'+id+'/', spouse, {headers:this.reqHeader});
  }
}
