import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/api';

  filters = new BehaviorSubject<any>({
    location: 'Chennai',
    checkIn: new Date(),
    checkOut: this.getDefaultCheckoutDate(),
    rooms: JSON.stringify([{
      room: 1, guest: { adult: 1, children: 0 }
    }]),
    price: 100 + '-' + 1500
  });
  roomType = new BehaviorSubject<any>(0);

  _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true };

  getDefaultCheckoutDate(): Date {
    const checkInDate = new Date();
    checkInDate.setDate(checkInDate.getDate() + 1); // Set default checkout date to the next day
    return checkInDate;
  }


  getHotelDataAll() {
    return this.http.get(this.baseUrl + '/hotel');
  }

  getFiltered(data: any) {
    return this.http.get(this.baseUrl + '/hotel/filter', { params: data });
  }

  getOne(id: any) {
    return this.http.get(this.baseUrl + '/hotel/one/' + id);
  }

  addHotel(data: any) {
    return this.http.post(this.baseUrl + '/hotel', data, this._options);
  }

  update(data: any, id: any) {
    return this.http.put(this.baseUrl + '/hotel/' + id, data, this._options);
  }

  delete(id: any) {
    return this.http.delete(this.baseUrl + '/hotel/' + id, this._options);
  }

}
