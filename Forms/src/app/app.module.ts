import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateApproachComponent } from './template-approach/template-approach.component';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes:Routes = [
  {path:'', redirectTo:'templateForm', pathMatch:'full'},
  {path: 'templateForm', component:TemplateApproachComponent},
  {path: 'reactiveForm', component:ReactiveApproachComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TemplateApproachComponent,
    ReactiveApproachComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
