import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes :Quote[] = [
    {id:1, name:'The eyes are the windows of the soul'},
    {id:2,name:'Stop and smell the roses'},
    {id:3,name:'Everything has beauty, but not everyone sees it'},
    {id:4,name:'Real beauty is to be true to oneself'},
    {id:5,name:'Beauty is power; a smile is its sword'},
    {id:6,name:'The best part of beauty is that which no picture can express'},
  ];

//   constructor(){
//     this.quotes = ['The eyes are the windows of the soul', 'Stop and smell the roses', 'Everything has beauty, but not everyone sees it']
//   }
}
