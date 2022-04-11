import { Component,ContentChild, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  isShow: boolean = true;
  showHide() {
    this.isShow = !this.isShow;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
