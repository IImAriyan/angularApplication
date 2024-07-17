import { Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ImageFilterComponent} from "./pages/image-filter/image-filter.component";
import {AbcComponent} from "./pages/abc/abc.component";
import {AverageComponent} from "./pages/average/average.component";
export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'} ,
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'imageFilter',component:ImageFilterComponent},
  {path:'abc',component:AbcComponent},
  {path:'average',component:AverageComponent}
];
