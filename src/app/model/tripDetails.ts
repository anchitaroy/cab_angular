export class TripDetails{constructor(public tripId:number=null,
        public customerId:number=null,
        public driverId:number=null,
        public bookingId:number=null,
        public issues:string="",
        public finalFare:number=0,
        public wallet:number=0){}
    
      //   constructor( tripId:number=null,
      //        customerId:number=null,
      //        driverId:number,
      //        bookingId:number,
      //        issues:string,
      //        finalFare:number,
      //        wallet:number){
      //           this.tripId=tripId;
      //           this.customerId=customerId;
      //           this.driverId=driverId;
      //           this.bookingId=bookingId;
      //           this.finalFare=finalFare;
      //           this.issues=issues;
      //           this.wallet=wallet;
      //        }
    }