import { Component, OnInit } from '@angular/core';
import { APIService} from'../API.service';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss']
})
export class RecordingComponent implements OnInit {
  recording:any;
  attachments:any;
  
  constructor(private api:APIService) { }

  async ngOnInit() {
     await this.getRecording('11111');
     this.attachments=this.recording.attachments.items;
     var attachment= {
      "description": "Car rental agreement 2",
      "id": "2",
      "url": "https://david-horn-recording.s3.amazonaws.com/wireframe-1.jpg",
      "viqRecordingAttachmentViqRecordingId": this.recording.id
    };
    await this.addAttachment(attachment);
  }
   async getRecording(id){
    this.recording= await this.api.GetViqRecording(id);
  }
  async addAttachment(attachment){
    
    await this.api.CreateViqRecordingAttachment(attachment)
  }
}
