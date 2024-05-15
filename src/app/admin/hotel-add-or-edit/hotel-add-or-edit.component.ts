import { Component } from '@angular/core';
import { ActiveWindowService } from '../../service/active-window.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HotelService } from '../../service/hotel.service';
import { all } from 'axios';
import { flush } from '@angular/core/testing';

interface Rooms {
  roomName: string,
  specifications: any[],
  benefits: string[],
  price: number,
  amount: number,
  taxAndFee: number,
  description: string,
  images: string,
  availableRooms: number,
  allowedGuest: number
}

@Component({
  selector: 'app-hotel-add-or-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hotel-add-or-edit.component.html',
  styleUrl: './hotel-add-or-edit.component.css'
})
export class HotelAddOrEditComponent {

  constructor(private activeWin: ActiveWindowService, private hotel: HotelService) {

    this.activeWin.setactive('Hotel');
  }

  allData: any[] = [];
  edit: boolean = false;

  idToedit: string = '';

  data: any;

  get() {
    this.data = {
      hotelName: '',
      location: '',
      amenities: [''] as string[],
      ratings: 0,
      rooms: [] as Rooms[],
      basePrice: 0,
      address: '',
      images: [''] as string[],
      resviews: [] as any[],
      description: '',
      bookingPalicy: '',
      thumbnail: '',
      map: ''
    }

    this.addRoom();
    this.hotel.getHotelDataAll().subscribe((data: any) => {
      this.allData = data.hotel;
      console.log(this.allData, data);
    });

  }


  ngOnInit() {
    this.get();
  }

  addRoom() {
    this.data.rooms.push({
      roomName: '',
      specifications: [''],
      benefits: [''],
      price: 0,
      amount: 0,
      taxAndFee: 0,
      description: '',
      images: '',
      availableRooms: 0,
      allowedGuest: 0
    });
  }

  fileUpload(e: any) {
    this.data.thumbnail = e.target;
  }

  addBenefit(room: Rooms) {
    room.benefits.push('');
  }

  addAmenity() {
    this.data.amenities.push('');
  }

  trackByFn(index: number, item: any): number {
    return index; // or return item.id; if you have a unique identifier
  }

  update(data: any) {
    this.edit = true;
    this.data = data;
    this.idToedit = data._id;
  }

  onUpdate() {
    this.hotel.update(this.data, this.idToedit).subscribe(data => {
      console.log(data);
      this.edit = false;
      this.get();
    });
  }

  onSubmit() {
    this.hotel.addHotel(this.data).subscribe(data => { console.log(data); this.get() });
  }

  onDelete(id: string) {
    this.hotel.delete(id).subscribe(data => { console.log(data); this.get() });
  }

}
