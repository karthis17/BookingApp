import { Component } from '@angular/core';
import { ActiveWindowService } from '../../service/active-window.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private activeWin: ActiveWindowService) {

    this.activeWin.setactive('Home');
  }

  ngOnInit() {
  }

}
