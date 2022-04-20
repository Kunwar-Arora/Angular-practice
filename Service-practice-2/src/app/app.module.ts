import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActiveInactiveComponent } from './active-inactive/active-inactive.component';
import { ServerAppComponent } from './server-app/server-app.component';
import { ActiveComponent } from './active-inactive/active/active.component';
import { InactiveComponent } from './active-inactive/inactive/inactive.component';
import { CounterService } from './active-inactive/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveInactiveComponent,
    ServerAppComponent,
    ActiveComponent,
    InactiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
