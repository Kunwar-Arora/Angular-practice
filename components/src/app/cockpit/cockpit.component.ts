import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //? @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //? @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //* Another syntax for data privacy
  @Output('svCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName = '';
  // newServerContent = '';

  //* using local refernce in ts file
  @ViewChild('serverContentInput', {static: true}) serverContentInput!: ElementRef;

  constructor() {}

  ngOnInit(): void {
  }

  //* since we are using localreference for catch data from content Input
  addServer(contentInput: HTMLInputElement){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: contentInput.value
    });
  };
  addBlueprint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.serverContentInput.nativeElement.value
    });
  };

}
