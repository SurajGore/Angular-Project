import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';
import { NewslistService } from './newslist.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NewslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
