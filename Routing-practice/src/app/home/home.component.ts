import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routers: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  loadServer(id: number){
    this.routers.navigate(['/servers', id, 'edit'], {queryParams: {AllowEdit: 1, Edited:1}, fragment:"Reload"});
  };
  
  logIn(){
    this.authService.login();
  }
  logOut(){
    this.authService.logout();
  }
}
