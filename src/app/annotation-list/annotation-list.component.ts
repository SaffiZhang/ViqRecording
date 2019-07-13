import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-annotation-list',
  templateUrl: './annotation-list.component.html',
  styleUrls: ['./annotation-list.component.scss']
})
export class AnnotationListComponent implements OnInit {

  @Input()
  public annotations: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
