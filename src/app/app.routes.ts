import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'hotels', loadComponent: () => import('../app/hotel-list/hotel-list.component').then((c) => c.HotelListComponent)
    },
    {
        path: 'hotel/:id', loadComponent: () => import('../app/product-details/product-details.component').then((c) => c.ProductDetailsComponent)
    },
    {
        path: 'login', loadComponent: () => import('../app/user-active/user-active.component').then((c) => c.UserActiveComponent)
    },
    {
        path: 'bookings/:id', loadComponent: () => import('../app/booking-page/booking-page.component').then((c) => c.BookingPageComponent)
    }, {
        path: 'contact', loadComponent: () => import('../app/contact/contact.component').then((c) => c.ContactComponent)
    },
    {
        path: 'about', loadComponent: () => import('../app/about/about.component').then((c) => c.AboutComponent)
    },
    {
        path: 'admin', component: AdminComponent, children: [
            { path: '', loadComponent: () => import('../app/admin/home/home.component').then(c => c.HomeComponent) },
            { path: 'bookings', loadComponent: () => import('../app/admin/bookinks/bookinks.component').then((c) => c.BookinksComponent) },
            { path: 'hotels', loadComponent: () => import('../app/admin/hotel-add-or-edit/hotel-add-or-edit.component').then((c) => c.HotelAddOrEditComponent) },
            { path: 'bookings/view/:id', loadComponent: () => import('../app/admin/booking-views/booking-views.component').then((c) => c.BookingViewsComponent) },
        ]
    },
];
