import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server!: {id: number, name: string, status: string};
  // = {id:1, name: 'Productionserver', status: 'online'};
  
  
  constructor(private serversService: ServersService, private activeRouter: ActivatedRoute, 
    private router: Router) { }
  


  ngOnInit() {
    const routeid = +this.activeRouter.snapshot.params['id']
    // this.activeRouter.params.subscribe(
    //   (params: Params) => {
    //     routeid = params['id'];
    //   }
    // );
    this.server = this.serversService.getServer(routeid)!;
    this.activeRouter.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id'])!;
      }
    );
    // this.server = this.serversService.getServer(1)!;
  }

  goToEdit(){
    this.router.navigate(['edit'], {relativeTo: this.activeRouter, queryParamsHandling: 'preserve'})
  }

}
