import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { NewslistService } from '../newslist.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers:[MessageService]
})
export class ClientComponent implements OnInit {
  msg1 ={}
  constructor(private _messageService:MessageService, private _newslistService:NewslistService) {
    this.msg=this._messageService.getMessage();
    this.msg1=this._newslistService.getNews()
  }
msg: string="";
  ngOnInit(): void {
  }

}
