import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPartnerComponent } from './components/add-partner/add-partner.component';
import { EditPartnerComponent } from './components/edit-partner/edit-partner.component';
import { ListPartnerComponent } from './components/list-partner/list-partner.component';
import { PartnerService } from './services/partner.service';
import { AddSpouseComponent } from './components/add-spouse/add-spouse.component';
import { EditSpouseComponent } from './components/edit-spouse/edit-spouse.component';
import { ListSpouseComponent } from './components/list-spouse/list-spouse.component';
import { SpouseService } from './services/spouse.service';

@NgModule({
  declarations: [
    AppComponent,
    AddPartnerComponent,
    EditPartnerComponent,
    ListPartnerComponent,
    AddSpouseComponent,
    EditSpouseComponent,
    ListSpouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PartnerService, SpouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
