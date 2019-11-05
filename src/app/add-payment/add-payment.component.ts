import { Component, OnInit } from '@angular/core';
import { TripDetails } from '../model/tripDetails';
import { CustomerService } from '../customer/customer.service';
import { Router } from '@angular/router';
import { Payment } from '../model/payment';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  trip: TripDetails=new TripDetails(3,301,201,101,"-----",262,500);
  payment: Payment;
  id: number;

  constructor(private service:CustomerService, private route:Router) { }

  ngOnInit() {
  }

  addPay(){
    this.service.savePayment(this.trip).subscribe(data => this.payment = data);
    //this.payment=new Payment();
    this.route.navigate(['add-report']);
  }
}
