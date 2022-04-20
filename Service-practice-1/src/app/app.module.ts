import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccountComponent } from './account/account.component';
import { AccountsService } from './accounts.service';

import { AppComponent } from './app.component';
import { LoggingServive } from './logging.service';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LoggingServive,
    AccountsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
