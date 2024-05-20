import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookinsService {


  constructor(private http: HttpClient) { }

  // baseUrl = 'http://localhost:3000/api/bookings';
  baseUrl = 'https://bookingapp-api-42gx.onrender.com/api/bookings';

  _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true };


  getBookings() {
    return this.http.get(this.baseUrl, { withCredentials: true });
  }

  createPaymentRequest(bookings: any) {
    return this.http.post(this.baseUrl + '/payment', bookings, this._options);
  }

  verrifyPayment(bookings: any) {
    return this.http.post(this.baseUrl + '/paymentVerify', bookings, this._options);
  }

  getUserBookings() {
    return this.http.get(this.baseUrl + '/user', { withCredentials: true });
  }


  private rzp: any;



  initializeRazorpay(options: any): void {
    if ((window as any)['Razorpay']) {
      this.rzp = new (window as any)['Razorpay'](options);
    } else {
      console.error('Razorpay not available.');
    }
  }

  openPayment(): void {
    if (this.rzp) {
      this.rzp.open();
    } else {
      console.error('Razorpay not initialized.');
    }
  }

  getBooking(id: any) {
    return this.http.get(this.baseUrl + '/get/' + id);
  }


}
