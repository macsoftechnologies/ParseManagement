import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ColorSketchModule } from 'ngx-color/sketch'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'
import { SidenavComponent } from './shared/sidenav/sidenav.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component'
import { StockManagementComponent } from './stock-management/stock-management.component'
import { LoanManagementComponent } from './loan-management/loan-management.component'
import { OfferManagementComponent } from './offer-management/offer-management.component'
import { ChartsModule } from 'ng2-charts'
import { AuthLoginComponent } from './auth-login/auth-login.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    DashboardComponent,
    VehicleManagementComponent,
    StockManagementComponent,
    LoanManagementComponent,
    OfferManagementComponent,
    AuthLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorSketchModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
