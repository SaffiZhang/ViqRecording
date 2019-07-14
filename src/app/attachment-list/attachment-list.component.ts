import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-attachment-list',
  templateUrl: './attachment-list.component.html',
  styleUrls: ['./attachment-list.component.scss']
})
export class AttachmentListComponent implements OnInit {

  @Input()
  public attachments: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
