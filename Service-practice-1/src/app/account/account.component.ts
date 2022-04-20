import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingServive } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingServive]
})
export class AccountComponent {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;
  
  
  constructor(private loggingService: LoggingServive, private accountsService: AccountsService){};

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status, this.account.name);
    // this.loggingService.logStatusChange(this.account.name, status)

    this.accountsService.statusUpdate.emit(status);
  }
}
