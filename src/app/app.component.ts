import { Component } from '@angular/core';
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes :string[];

  constructor(){
    this.quotes = ['The eyes are the windows of the soul', 'Stop and smell the roses', 'Everything has beauty, but not everyone sees it']
  }
}
