import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MessageService {

  constructor() { }
  getMessage(){
    return "Hello World!";
  }
}
