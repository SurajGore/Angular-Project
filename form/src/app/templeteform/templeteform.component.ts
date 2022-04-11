import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
@Component({
  selector: 'app-templeteform',
  templateUrl: './templeteform.component.html',
  styleUrls: ['./templeteform.component.css']
})
export class TempleteformComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
Registration(regdata:NgForm){
  console.log(regdata);
  // alert("Hello");
  console.log(regdata.valid);
  console.log(regdata.value);
 }

// clickme(){
//   alert ("cancel call")
// }
}
