import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, FormGroup, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StockHomeComponent } from './stock/stock-home/stock-home.component';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';
import { StockEditComponent } from './stock/stock-edit/stock-edit.component';
import { LoginComponent } from './login/login.component';
import { SEComponent } from './se/se.component';
import { MlComponent } from './ml/ml.component';
import { ImComponent } from './im/im.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StockCreateDialogComponent } from './stock/stock-create/stock-create.component';
import { StockCreateDialogComponent1 } from './stock/stock-create/stock-create.component';
import { HeaderproComponent } from './headerpro/headerpro.component';
import { ResetComponent } from './reset/reset.component';
import { ResetsuccessComponent } from './resetsuccess/resetsuccess.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    StockHomeComponent,
    StockCreateComponent,
    StockEditComponent,
    LoginComponent,
    SEComponent,
    MlComponent,
    ImComponent,
    StockCreateDialogComponent,
    StockCreateDialogComponent1,
    HeaderproComponent,
    ResetComponent,
    ResetsuccessComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
