import { Injectable } from "@angular/core";

@Injectable()
export class CounterService{
  activeCounts = 0;
  inactiveCounts = 0;

  incrementactive(){
    this.activeCounts++;
    console.log("Active Accounts" + this.activeCounts)
  };

  incrementinactive(){
    this.inactiveCounts++;
    console.log("Inactive Accounts" + this.inactiveCounts)
  };
}
