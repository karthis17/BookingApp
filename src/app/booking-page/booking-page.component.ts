import { Component } from '@angular/core';
import { HotelService } from '../service/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchInputsComponent } from '../sharingComponents/search-inputs/search-inputs.component';
import { CurrencyPipe } from '@angular/common';
import { BookinsService } from '../service/bookins.service';
import { first } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [SearchInputsComponent, CurrencyPipe, FormsModule],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css'
})
export class BookingPageComponent {

  constructor(private hotel: HotelService, private route: ActivatedRoute, private payment: BookinsService, private router: Router) { }

  data: any;
  roomIndex: number = 0;
  roomData: any;
  totalAmount: number = 0;

  primaryUser: {
    initial: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }[] = [];

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.hotel.getOne(id).subscribe((result: any) => {
        this.data = result.hotel;
      })
      console.log(this.data);
    });

    this.hotel.roomType.subscribe((num: any) => {
      this.roomIndex = num;
    });

    this.hotel.filters.subscribe((data) => {
      this.roomData = { ...data };
      this.roomData.rooms = JSON.parse(this.roomData.rooms);
      this.roomData.rooms.forEach((element: any) => {
        this.primaryUser.push({
          initial: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        })
      });
    });
  }


  getDaysDifference(startDate: Date | string, endDate: Date | string) {

    if (typeof startDate === 'string') {

      let dateStr = startDate.split('-');

      startDate = new Date();
      startDate.setFullYear(+dateStr[0]);
      startDate.setMonth(+dateStr[1]);
      startDate.setDate(+dateStr[2]);
    }

    if (typeof endDate === 'string') {
      let dateStr = endDate.split('-');

      endDate = new Date();
      endDate.setFullYear(+dateStr[0]);
      endDate.setMonth(+dateStr[1] - 1);
      endDate.setDate(+dateStr[2]);
    }

    console.log(startDate, endDate);
    // Convert both dates to milliseconds
    const startMs = startDate.getTime();
    const endMs = endDate.getTime();

    // Calculate the difference in milliseconds
    const differenceMs = endMs - startMs;

    // Convert the difference to days
    const daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    return daysDifference;
  }

  setTotal(amount: number): number {
    this.totalAmount = amount;
    return amount;
  }

  checkout() {


    this.payment.createPaymentRequest({ name: 'FastKart', amount: this.totalAmount, description: "FastKart" }).subscribe((res: any) => {
      if (res.success) {
        // Handle payment success
        console.log(res);
        let options = {
          "key": res.key_id,
          "amount": `${res.amount}`,
          "currency": "INR",
          "name": res.product_name,
          "description": res.description,
          "image": "https://dummyimage.com/600x400/000/fff",
          "order_id": res.order_id,
          "handler": (response: any) => {
            this.handlePaymentSuccess(response, res);
          },

          "prefill": {
            "contact": res.contact,
            "name": res.name,
            "email": res.email
          },
          "notes": {
            "description": res.description
          },
          "theme": {
            "color": "#2300a3"
          }
        };


        this.payment.initializeRazorpay(options);
        this.payment.openPayment()


      } else {
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: res.msg,
        // });

        console.error(res.msg);
      }
    },
      error => {
        console.error(error);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: "An error occurred",
        // });
      }
    );
  }



  handlePaymentSuccess(response: any, paymentResponse: any) {
    // Payment succeeded
    console.log("Payment succeeded");
    console.log(response);
    console.log(paymentResponse)

    // Verify payment signature


    this.payment.verrifyPayment({
      orderId: response.razorpay_order_id,
      paymentId: response.razorpay_payment_id,
      signature: response.razorpay_signature,
      ...this.roomData,
      amount: this.totalAmount,
      hotel: this.data._id,
      roomType: this.roomIndex,
      primaryGuest: this.primaryUser

    }).subscribe(payment => {
      // Swal.fire({
      //   position: "center",
      //   icon: "success",
      //   title: "Payment Successed",
      //   showConfirmButton: false,
      //   timer: 1000
      // });

      console.log("Payment", payment);

      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1000)
    });


  }


}
