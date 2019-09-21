import { Component, OnInit } from '@angular/core';
import{ Quote } from'../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes :Quote[] = [
    {id:1, name:'The eyes are the windows of the soul',description:'What your soul speaks is displayed in your eyes'},
    {id:2,name:'Stop and smell the roses',description:'At times when you feel overwhelmed first find solutions'},
    {id:3,name:'Everything has beauty, but not everyone sees it',description:'Like in life most people have eyes but do not see'},
    {id:4,name:'Real beauty is to be true to oneself',description:'Honesty allows us to be free'},
    {id:5,name:'Beauty is power; a smile is its sword',description:'Expression of beauty very simple just wear a smile'},
    {id:6,name:'The best part of beauty is that which no picture can express',description:'You do not have to see my physical appearance to judge how beautiful I am'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
