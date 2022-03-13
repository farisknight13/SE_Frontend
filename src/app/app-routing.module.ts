import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockHomeComponent } from './stock/stock-home/stock-home.component';
import { StockEditComponent } from './stock/stock-edit/stock-edit.component';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';
import { LoginComponent } from './login/login.component';
import { SEComponent } from './se/se.component';
import { MlComponent } from './ml/ml.component';
import { ImComponent} from './im/im.component';

import { ResetsuccessComponent } from './resetsuccess/resetsuccess.component';
import { HomeComponent } from './home/home.component';
import { ResetComponent } from './reset/reset.component';


const routes: Routes = [
 //ลิ้งหน้า path เวลาใส่ url ให้มันไปโผล่อีกหน้าตามที่เขียน 
  {path: 'stock', component: StockHomeComponent },
  {path: 'stock/create', component: StockCreateComponent },
  {path: 'stock/home', component: StockEditComponent},
  {path: 'login', component: LoginComponent},
  {path: 'se', component: SEComponent},
  {path: 'ml', component: MlComponent},
  {path: 'im', component: ImComponent},
  { path: 'reset', component: ResetComponent },
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  { path: 'resetsu', component: ResetsuccessComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
