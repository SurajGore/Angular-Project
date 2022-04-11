import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() pdata:string=" "
  constructor() { 
    console.log("ChildComponent constructor called !!");
  }
  ngOnchanges(changes:any){
    console.log("childComponent ngOnChanges Called !!");
    console.log(changes);
  }
  
  ngOnInit(): void {
    console.log("ChildComponent ngOnInit Called !!");
  }

  ngDoCheck(){
    console.log("ChildComponent ngDoCheck Called !!");
  }

  // ngOnDestroy(){
  //   console.log("ChildComponent ngDestory Called !!");
  // }
}
