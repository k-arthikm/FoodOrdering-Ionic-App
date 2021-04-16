import { OrderfoodComponent } from './customer/orderfood/orderfood.component';
import { CustomerpanelComponent } from './customer/customerpanel/customerpanel.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';
import { AllordersComponent } from './allorders/allorders.component';
import { CommonServiceService } from './services/common-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { DropdownListModule } from 'ngx-dropdown-list';
import {DropdownModule} from "ngx-dropdown";
import { OrderdetailsComponent } from './customer/orderdetails/orderdetails.component';








@NgModule({
  declarations: [AppComponent,AdminComponent,AllordersComponent,FoodmenuComponent,UsersComponent,CustomerpanelComponent,OrderfoodComponent,OrderdetailsComponent],
  entryComponents: [],
  imports: [BrowserModule,CommonModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule,SelectDropDownModule,DropdownListModule,DropdownModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},CommonServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
