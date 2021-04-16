import { OrderfoodComponent } from './customer/orderfood/orderfood.component';
import { CustomerpanelComponent } from './customer/customerpanel/customerpanel.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AllordersComponent } from './allorders/allorders.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';
import { UsersComponent } from './users/users.component';
import { OrderdetailsComponent } from './customer/orderdetails/orderdetails.component';
// import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    //redirectTo:'app-allorders',
    redirectTo: 'home',
    pathMatch: 'full'
  },
    {path:"app-allorders",component:AllordersComponent},
    {path:"app-foodmenu",component:FoodmenuComponent},
    {path:"admin",component:AdminComponent,
     children: [{path: "app-allorders", component: AllordersComponent},
     {path:"app-foodmenu",component:FoodmenuComponent},
     {path:"app-users",component:UsersComponent}]
    },
    {path:"customer",component:CustomerpanelComponent,
    children: [{path:"app-orderfood",component:OrderfoodComponent},
    {path:"app-orderdetails",component:OrderdetailsComponent}]}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),FormsModule,CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
