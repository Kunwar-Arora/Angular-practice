import { Component, OnInit } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-active-inactive',
  templateUrl: './active-inactive.component.html',
  styleUrls: ['./active-inactive.component.css'],
  providers: [StorageService]
})
export class ActiveInactiveComponent implements OnInit {

  activeAccounts: any[] = [];
  inactiveAccounts: any[] = [];
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.activeAccounts = this.storageService.activeAccounts;
    this.inactiveAccounts = this.storageService.inactiveAccounts;
  }

}
