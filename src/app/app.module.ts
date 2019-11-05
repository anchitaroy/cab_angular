import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AddReportComponent } from './add-report/add-report.component';
import { NaviRoutingModule } from './navi/navi-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TripEndedComponent } from './trip-ended/trip-ended.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPaymentComponent,
    AddReportComponent,
    TripEndedComponent
  ],
  imports: [
    BrowserModule, FormsModule, NaviRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
