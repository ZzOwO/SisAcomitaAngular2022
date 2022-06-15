import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPartnerComponent } from './components/add-partner/add-partner.component';
import { AddSpouseComponent } from './components/add-spouse/add-spouse.component';
import { ListPartnerComponent } from './components/list-partner/list-partner.component';
import { ListSpouseComponent } from './components/list-spouse/list-spouse.component';

const routes: Routes = [
  {path: 'list-partners', component:ListPartnerComponent},
  {path: 'add-partner', component:AddPartnerComponent},
  {path: 'list-spouses', component:ListSpouseComponent},
  {path: 'add-spouse', component:AddSpouseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
