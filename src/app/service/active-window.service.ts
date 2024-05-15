import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveWindowService {

  constructor() { }

  activeRouter = new BehaviorSubject<string>('Home');

  setactive(name: string) {
    this.activeRouter.next(name);
  }
}
