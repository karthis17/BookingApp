import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/api/user';

  _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true };


  login(data: any) {
    return this.http.post(this.baseUrl + '/login', data, this._options);
  }

  register(data: any) {
    return this.http.post(this.baseUrl + '/register', data, this._options);
  }

  me() {
    return this.http.get(this.baseUrl + '/me', { withCredentials: true });
  }


}
