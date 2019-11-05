import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPaymentComponent } from '../add-payment/add-payment.component';
import { AddReportComponent } from '../add-report/add-report.component';
import { TripEndedComponent } from '../trip-ended/trip-ended.component';

const routes: Routes = [
  {path:"", redirectTo:"/add-payment", pathMatch:"full"},
  {path:"add-payment", component: AddPaymentComponent},
  {path:"add-report", component:  AddReportComponent},
  {path:"tripEnded", component: TripEndedComponent},
  {path:"**", redirectTo:"/tripEnded", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NaviRoutingModule { }
