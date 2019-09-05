import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.scss']
})
export class CaseInfoComponent implements OnInit {

  @Input()
  public case:any;

  constructor() { }

  ngOnInit() {
  }

}
