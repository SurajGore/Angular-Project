import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() Pdata:any;
  //@Input('parent_component_textbox1_data') Pdata:any;
  @Output() childevent= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
