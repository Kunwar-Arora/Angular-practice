import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  activeAccounts: any[] = [];
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.activeAccounts = this.storageService.activeAccounts;
  }

  swtichToInactive(index: number, name:string){
    this.storageService.switchActiveToInactive(index, name);
  }
}
