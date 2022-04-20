import { Injectable } from "@angular/core";

@Injectable()
export class LoggingServive{
    logStatusChange(name: string, status: string){
        console.log(`'${name}' server status changed, new status: ${status}`);
    }
}