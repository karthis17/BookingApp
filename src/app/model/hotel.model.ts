import { SafeResourceUrl } from "@angular/platform-browser";
import { Room } from "./room.model";

export interface Hotel {
    _id?: string;
    hotelName: string;
    location: string;
    amenities: string[];
    ratings: number;
    rooms: Room[];
    basePrice: number;
    address: string,
    images: string[],
    resviews: any[],
    description: '',
    bookingPalicy: '',
    thumbnail: '',
    map: ''
}