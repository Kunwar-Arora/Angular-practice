import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {
  inactiveAccounts: any[] = [];
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.inactiveAccounts = this.storageService.inactiveAccounts;
  }

  swtichToactive(index: number, name:string){
    this.storageService.switchinactiveToActive(index, name);
  }

}
