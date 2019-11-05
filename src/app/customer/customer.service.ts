import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TripDetails } from '../model/tripDetails';
import { Payment } from '../model/payment';
import { Report } from '../model/report';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }

  savePayment(pay : TripDetails){
    return this.http.post<Payment>("http://localhost:8884/paymentsfeedback/payment", pay);
   }
 
   saveReport(rep : TripDetails){
    return this.http.post<Report>("http://localhost:8884/paymentsfeedback/updateFeedback", rep);
   }
}
