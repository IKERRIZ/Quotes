import { Component, OnInit } from '@angular/core';
import{ Quote } from'../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  isComplete = true;
  quotes :Quote[] = [
    new Quote(1, 'John Doe','Hillary Muchengs','The eyes are the windows of the soul', new Date(2019, 9, 9), 0, 0),
    new Quote(2,'Jane Lucy','Bill Romeo','Stop and smell the roses', new Date(2019, 5, 9), 0, 0),
    new Quote(3,'Donnel Elton','Grace Ghates','Everything has beauty, but not everyone see it', new Date(2019, 9, 5), 0, 0),
   
  ];

  upVote(quote) {
    quote.upvotescount  =  quote.upvotescount + 1;
  }

  downVote(quote) {
    quote.downvotescount = quote.downvotescount + 1;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.name = quote.name;
    quote.author = quote.author;
    quote.quote = quote.quote;
    quote.datesubmitted = new Date(quote.datesubmitted)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {}
  }


