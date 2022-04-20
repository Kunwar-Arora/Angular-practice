import { Component, ElementRef, ViewChild } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingServive } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingServive]
})
export class NewAccountComponent {
  @ViewChild('accountName',{static:true}) name!: ElementRef;

  constructor(private loggingService: LoggingServive, private accountsService: AccountsService){
    this.accountsService.statusUpdate.subscribe(
      (status: string) => alert('Status Changed: ' + status)
    )
  };

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);

    // this.loggingService.logStatusChange(accountName, accountStatus);

    this.name.nativeElement.value = '';
  }
}
