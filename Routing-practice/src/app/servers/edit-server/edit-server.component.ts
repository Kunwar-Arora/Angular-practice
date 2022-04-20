import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit , CanComponentDeactivate{

  server!: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changeId!: number;
  changesSaved = false;

  constructor(private serversService: ServersService, private activeRoute:ActivatedRoute, private route:Router) { }
  
  ngOnInit() {
    // console.log(this.activeRoute.snapshot.queryParams);
    // console.log(this.activeRoute.snapshot.fragment);
    this.activeRoute.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    // this.activeRoute.fragment.subscribe();
    const id = +this.activeRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(id)!;
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.changeId =  +params['id'];
      }
    );
    this.server = this.serversService.getServer(this.changeId)!;

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.route.navigate(['../'], {relativeTo: this.activeRoute});
  };
  
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved ){
      return confirm('Do you want to Discard the Changes?');
    } else{
      return true;
    }
  }; 


}
