import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() contentInput: any;
  public pleaseWaitLoader: any;
  constructor() { 
    this.pleaseWaitLoader = Array.from(Array(4), (_, i) => i + 1)
  }

  ngOnInit() {
  }

}
