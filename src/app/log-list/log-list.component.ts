import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {
  @Input()
  public logs: any[];


  constructor() { }

  ngOnInit() {
  }

}
