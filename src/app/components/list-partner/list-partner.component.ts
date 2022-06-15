import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partner } from 'src/app/models/partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-list-partner',
  templateUrl: './list-partner.component.html',
  styleUrls: ['./list-partner.component.css']
})
export class ListPartnerComponent implements OnInit {
  partnerList:any=[];
  constructor(public partnerService:PartnerService, private router:Router) { }

  ngOnInit(): void {
    this.loadPartners();
  }

  loadPartners(){
    return this.partnerService.GetPartners().subscribe((data:{})=>{
      this.partnerList=data;
    })
  }

  deletePartner(id:number){
    this.partnerService.DeletePartner(id).subscribe((response)=>{
      this.loadPartners();
    }) ;
  }

  onEdit(partner:Partner){
    console.log(partner);
    this.partnerService.selectPartner=Object.assign({}, partner);
    this.router.navigate(["/add-partner"]);
  }

}
