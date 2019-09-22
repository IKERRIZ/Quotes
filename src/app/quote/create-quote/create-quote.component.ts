import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newQuote = new Quote(0,"","", "",new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quote>();
  
  submitQuote(){
  this.addQuote.emit(this.newQuote);
    }
}
