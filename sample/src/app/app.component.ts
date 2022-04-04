import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  Name:string ="Suraj Gore";

  Student={
    stdname: 'suraj',
    stdage: 29,
    stdrollno: 123456 ,
    stdaddress:'Thane'
  }

  // Student:any;


getName() {
  return this.Name;
}
changeName() {
  //console.log(this.Name);
  this.Name='Pragati';
}
}