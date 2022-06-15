import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Partner } from 'src/app/models/partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.component.css']
})
export class AddPartnerComponent implements OnInit {

  constructor(public partnerService:PartnerService, private router:Router) { }

  ngOnInit(): void {
  }

  submitForm(partnerForm:NgForm){
    if(partnerForm.value.id==null){
      this.partnerService.CreatePartner(partnerForm.value).subscribe((response)=>{
        this.router.navigate(["/list-partners"]);
      });
    }else{
        this.partnerService.UpdatePartner(partnerForm.value.id, partnerForm.value).subscribe((response)=>{
          this.router.navigate(["/list-partners"]);
        });
    }
    this.resetForm(partnerForm);
  }

  resetForm(partnerForm:NgForm){
    if(partnerForm!=null){
      partnerForm.reset();
      this.partnerService.selectPartner=new Partner();
    }
  }

}
