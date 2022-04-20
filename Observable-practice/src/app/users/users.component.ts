import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  id!:number;
  constructor(private aciveRouter: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.aciveRouter.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
      }
    );
  }
  activate(){
      this.userService.activateEmitter.next(true);
  }
  

}
