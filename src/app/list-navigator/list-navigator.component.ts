import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-navigator',
  templateUrl: './list-navigator.component.html',
  styleUrls: ['./list-navigator.component.css']
})

export class ListNavigatorComponent implements OnInit {
  page1 =[{firstname: "Mike" ,lastName: "alex",age: 22,email:"mike@gmail.com"},{firstname: "jo" ,lastName: "sand",age: 22,email:"jo@gmail.com"}];
  page2=[{firstname: "sameer" ,lastName: "malik",age: 22,email:"sameer@gmail.com"},{firstname: "sara" ,lastName: "malik",age: 43,email:"sara@gmail.com"}];
  page3= [{firstname: "jo" ,lastName: "sand",age: 22,email:"jo@gmail.com"}];
  page4=[{firstname: "abd" ,lastName: "saleh",age: 22,email:"abd@gmail.com"}];
  page5=[{firstname: "sameer" ,lastName: "malik",age: 22,email:"sameer@gmail.com"}];
  showpage1 = true;
  showpage2 = false;
  showpage3 = false;
  showpage4 = false;
  showpage5 = false;
   count = 1;
   pageNumber=1;
  constructor() { }

  ngOnInit(): void {
  }
  showListNumbers(pageNumber: number){
    if (pageNumber == 1) {
      this.count = pageNumber
      this.showpage1 = true;
      this.showpage2 = false;
      this.showpage3 = false;
      this.showpage4 = false;
      this.showpage5 = false;
    } else if (pageNumber == 2) {
      this.count = pageNumber
      this.showpage1 = false;
      this.showpage2 = true;
      this.showpage3 = false;
      this.showpage4 = false;
      this.showpage5 = false;
    } else if (pageNumber == 3) {
      this.count = pageNumber
      this.showpage1 = false;
      this.showpage2 = false;
      this.showpage3 = true;
      this.showpage4 = false;
      this.showpage5 = false;
    } else if (pageNumber == 4) {
      this.count = pageNumber
      this.showpage1 = false;
      this.showpage2 = false;
      this.showpage3 = false;
      this.showpage4 = true;
      this.showpage5 = false;
    } else if (pageNumber == 5) {
      this.count = pageNumber
      this.showpage1 = false;
      this.showpage2 = false;
      this.showpage3 = false;
      this.showpage4 = false;
      this.showpage5 = true;
    }
  }

  showListArrows(number: number){
    
    this.count = this.count + number;
    if (this.count == 1) {
      this.showpage1 = true;
      this.showpage2 = false;
      this.showpage3 = false;
      this.showpage4 = false;
      this.showpage5 = false;
    } else if (this.count == 2) {
      this.showpage1 = false;
      this.showpage2 = true;
      this.showpage3 = false;
      this.showpage4 = false;
      this.showpage5 = false;
    } else if (this.count == 3) {
      this.showpage1 = false;
      this.showpage2 = false;
      this.showpage3 = true;
      this.showpage4 = false;
      this.showpage5 = false;
    } else if (this.count == 4) {
      this.showpage1 = false;
      this.showpage2 = false;
      this.showpage3 = false;
      this.showpage4 = true;
      this.showpage5 = false;
    } else if (this.count == 5) {
      this.showpage1 = false;
      this.showpage2 = false;
      this.showpage3 = false;
      this.showpage4 = false;
      this.showpage5 = true;
    }
  }


}
