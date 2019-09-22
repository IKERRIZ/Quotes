export class Quote {
  constructor(public id: number,public name: string,public author: string,
    public quote: string,
     public datesubmitted: Date, 
     public upvotescount: number, public downvotescount: number){

  }
}
