import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class StorageService{
  activeAccounts: any[] = ['max', 'shawn'];
  inactiveAccounts: any[] = ['sam', 'john'];

  constructor(private counterService: CounterService){}

  switchActiveToInactive(index: number, name:string){
    this.activeAccounts.splice(index, 1);
    this.inactiveAccounts.push(name);
    this.counterService.incrementinactive();
  };
  switchinactiveToActive(index: number, name:string){
    this.inactiveAccounts.splice(index, 1);
    this.activeAccounts.push(name);
    this.counterService.incrementactive();
  }

}
