import { Component, OnInit } from '@angular/core';
import{ Quote } from'../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes :Quote[] = [
    new Quote(1, 'The eyes are the windows of the soul','What your soul speaks is displayed in your eyes'),
    new Quote(2,'Stop and smell the roses','At times when you feel overwhelmed first find solutions'),
    new Quote(3,'Everything has beauty, but not everyone sees it','Like in life most people have eyes but do not see'),
    new Quote(4,'Real beauty is to be true to oneself','Honesty allows us to be free'),
    new Quote(5,'Beauty is power; a smile is its sword','Expression of beauty very simple just wear a smile'),
    new Quote(6,'The best part of beauty is that which no picture can express','You do not have to see my physical appearance to judge how beautiful I am'),
  ];

  constructor() { }

  ngOnInit() {}
  }

}
