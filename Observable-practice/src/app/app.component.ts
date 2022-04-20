import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService){}
  title = 'observables';
  activate = false;
  private subs!: Subscription;

  ngOnInit(){
    
    this.subs = this.userService.activateEmitter.subscribe(
      (activate) => {
        this.activate = activate;
      }
    )
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
