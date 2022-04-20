import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: {id: number, name: string, status: string}[] = [];
  constructor(private serversService: ServersService, private routers: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  reload(){
    // this.routers.navigate(['../servers'], {relativeTo: this.activeRoute});
  };

}
