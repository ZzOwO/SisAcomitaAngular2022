import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partner } from '../models/partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  selectPartner:Partner=new Partner();
  reqHeader=new HttpHeaders({
    'Content-Type':'aplication/json',
  })

  constructor(private http:HttpClient) { }
  baseurl = 'http://127.0.0.1:8000/api';

  //metodo get
  GetPartners():Observable<Partner>{
    return this.http.get<Partner>(this.baseurl+'/partners/');
  }
  //metodo post
  CreatePartner(partner:Partner):Observable<Partner>{
    return this.http.post(this.baseurl+'/partners/', partner,{headers:this.reqHeader})
  }

  //metodo delete
  DeletePartner(id:number){
    return this.http.delete(this.baseurl+'/partners/'+id+'/');
  }

  //metodo update
  UpdatePartner(id:number, partner:Partner){
    return this.http.put(this.baseurl+'/partners/'+id+'/', partner, {headers:this.reqHeader});
  }

}
