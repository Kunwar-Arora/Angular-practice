import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  oddOnly = false;
  value = 5;
}