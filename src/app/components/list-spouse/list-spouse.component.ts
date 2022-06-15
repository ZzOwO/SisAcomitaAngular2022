import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Spouse } from 'src/app/models/spouse';
import { SpouseService } from 'src/app/services/spouse.service';

@Component({
  selector: 'app-list-spouse',
  templateUrl: './list-spouse.component.html',
  styleUrls: ['./list-spouse.component.css']
})
export class ListSpouseComponent implements OnInit {
  spouseList:any=[];
  constructor(public spouseService:SpouseService, private router:Router) { }

  ngOnInit(): void {
    this.loadSpouses();
  }

  loadSpouses(){
    return this.spouseService.GetSpouses().subscribe((data:{})=>{
      this.spouseList=data;
    })
  }

  deleteSpouse(id:number){
    this.spouseService.DeleteSpouse(id).subscribe((response)=>{
      this.loadSpouses();
    }) ;
  }

  onEdit(spouse:Spouse){
    console.log(spouse);
    this.spouseService.selectSpouse=Object.assign({}, spouse);
    this.router.navigate(["/add-spouse"]);
  }

}
