import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component1';
  name:string="Sachin Tendulkar";
  n1:number=2;
  n2:number=3;
  name1:string="virat";
  redClass="text-red";
  
  // company = {
  //   name:'bitcode',
  //   city:'pune',
  //   state:'Maharatstra',
  //   country:'India'
  // }

  getName(){
    return this.name;
  }
  changeName(){
    //console.log(this.name);
    this.name='Ashish';
  }
  arr:number[]=[1,2,3];
  // Company = {
  //   name: ' ',
  //   city:'pune',
  //   country: 'india'
  // }
  Company:any;
}


