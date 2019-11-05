import { Component, OnInit } from '@angular/core';
import { TripDetails } from '../model/tripDetails';
import { CustomerService } from '../customer/customer.service';
import { Router } from '@angular/router';
import { Payment } from '../model/payment';
import { Report } from '../model/report';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
 
  trip: TripDetails=new TripDetails(3,302,202,102,"-----",362,900);
  payment: Payment;
  report: Report;
  id: number;


  constructor(private service:CustomerService, private route:Router) { }

  ngOnInit() {
  }

  addRep(){
    this.service.saveReport(this.trip).subscribe(data => this.report = data);
    this.report=new Report();
    this.route.navigate(['tripEnded']);
  }
}
