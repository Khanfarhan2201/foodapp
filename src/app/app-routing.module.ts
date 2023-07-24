import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { SearchBarComponent } from './pages/search-bar/search-bar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './admin.guard';
import { SellerComponent } from './seller/seller.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'search',component:SearchBarComponent},
  {path:'seller',component:SellerComponent,canActivate:[AdminGuard]},
  {path:'admin',component:AdminComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }