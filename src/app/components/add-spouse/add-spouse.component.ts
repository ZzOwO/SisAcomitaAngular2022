import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Spouse } from 'src/app/models/spouse';
import { SpouseService } from 'src/app/services/spouse.service';

@Component({
  selector: 'app-add-spouse',
  templateUrl: './add-spouse.component.html',
  styleUrls: ['./add-spouse.component.css']
})
export class AddSpouseComponent implements OnInit {

  constructor(public spouseService:SpouseService, private router:Router) { }
  spouseList:any=[];
  ngOnInit(): void {
  }

  submitForm(spouseForm:NgForm){
    if(spouseForm.value.id==null){
      this.spouseService.CreateSpouse(spouseForm.value).subscribe((response)=>{
        this.router.navigate(["/list-spouses"]);
      });
    }else{
        this.spouseService.UpdateSpouse(spouseForm.value.id, spouseForm.value).subscribe((response)=>{
          this.router.navigate(["/list-spouses"]);
        });
    }
    this.resetForm(spouseForm);
  }

  resetForm(spouseForm:NgForm){
    if(spouseForm!=null){
      spouseForm.reset();
      this.spouseService.selectSpouse=new Spouse();
    }
  }

}
