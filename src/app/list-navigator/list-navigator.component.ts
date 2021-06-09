import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-navigator',
  templateUrl: './list-navigator.component.html',
  styleUrls: ['./list-navigator.component.css']
})

export class ListNavigatorComponent implements OnInit {
  pages =[{firstname: "Mike" ,lastName: "alex",age: 22,email:"mike@gmail.com",page :1},{firstname: "jo" ,lastName: "sand",age: 22,email:"jo@gmail.com",page :1},{firstname: "sameer" ,lastName: "malik",age: 22,email:"sameer@gmail.com",page :1},{firstname: "sara" ,lastName: "malik",age: 43,email:"sara@gmail.com",page :2},{firstname: "jo" ,lastName: "sand",age: 22,email:"jo@gmail.com",page :3},{firstname: "abd" ,lastName: "saleh",age: 22,email:"abd@gmail.com",page :4},{firstname: "sameer" ,lastName: "malik",age: 22,email:"sameer@gmail.com",page :5}];
 
  count = 1;
  pageNumber=1;
  constructor() { }

  ngOnInit(): void {
  }
  showListNumbers(pageNumber: number){
    this.count = pageNumber;
  }

  showListArrows(number: number){
    
    this.count = this.count + number;
    
  }


}
