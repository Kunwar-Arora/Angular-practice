import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  //* for exporting data/varriable/object from parent component(in case app.component is parent component)
  //* We use @input('varriableName') !important->declare/import Input decorator form '@angular/core'
  //* Now this element=srvElement
  @Input('srvElement') elements!: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit(): void {
  }

}
