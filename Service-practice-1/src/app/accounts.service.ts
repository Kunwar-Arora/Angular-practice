import { EventEmitter, Injectable } from "@angular/core";
import { LoggingServive } from "./logging.service";

@Injectable()
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];
    constructor(private loggingService: LoggingServive) {}
    statusUpdate = new EventEmitter<string>();
    addAccount(name: string, status: string){
        this.accounts.push({name:name, status: status});
        this.loggingService.logStatusChange(name, status);
    };
    updateAccount(id: number, status: string, name:string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(name, status);
    }
}