import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoanManagementComponent } from './loan-management/loan-management.component';
import { OfferManagementComponent } from './offer-management/offer-management.component';
import { StockManagementComponent } from './stock-management/stock-management.component';
import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'VehicleManagement',
    component: VehicleManagementComponent,
  },
  {
    path: 'StockManagement',
    component: StockManagementComponent,
  },
  {
    path: 'LoanManagement',
    component: LoanManagementComponent,
  },
  {
    path: 'OfferManagement',
    component: OfferManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
