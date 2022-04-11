import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  regForm: FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      id: new FormControl(),
      fname: new FormControl,
      lname: new FormControl,
      email: new FormControl,
      mobileno: new FormControl()
    })
  }

  register (Formdata:FormBuilder){
    console.log(Formdata);
    //console.log(Formdata.Value);
    //console.log(Formdata.Valid);
    //console.log(this.regForm.value);
    //console.log(this.regForm.valid);
    //console.log(this.regForm);
  }
}
