import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewslistService {
  news = [
    {id: 1, title:'Bollywood', desciption: "This is related To Bollywood"},
    {id: 2, title:'Politics', desciption: "This is related To Politics"},
    {id: 3, title:'Cricket', desciption: "This is related To Cricket"},
    {id: 4, title:'Finance', desciption: "This is related To Finance"},
  ];
  constructor() { }
  //to call on any component
  getNews(){
    return this.news;
  }
}
