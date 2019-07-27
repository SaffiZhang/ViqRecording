import { Component, OnInit } from '@angular/core';
import { APIService} from'../API.service';
import  { ModelViqRecordingLogFilterInput}from'../API.service';
import  { ModelViqRecordingAttachmentFilterInput}from'../API.service';
import  { ModelViqRecordingUrlFilterInput}from'../API.service';
import  { ModelViqRecordingTranscriptionFilterInput}from'../API.service';
import  { ModelViqRecordingRedactionFilterInput}from'../API.service';
import  { ModelViqRecordingSharedFilterInput }from'../API.service';
@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss']
})
export class RecordingComponent implements OnInit {
  recording:any;
  attachments:any;
  recordingUrls:any=[];
  logs:any=[{
    "__typename": "ViqRecordingLog",
    "createdAt": "2019-07-14T15:48:03.680Z",
    "dateTime": "2019-07-14 11:48:03",
    "description": "New metadata:{\"officer\":\"1234\",\"interviewee\":\"Donald Trump \",\"dob\":\"1998/01/01\",\"note\":\"adsfasdfasdfasdf\",\"location\":\"QueensLand police station 1\"}",
    "id": "0624576e-0d8e-4472-82c8-814549fb1b31",
    "updatedAt": "2019-07-14T15:48:03.680Z",
    "viqRecordingLogViqRecordingId": "11111"
  }];
  
  constructor(private api:APIService) { }

  async ngOnInit() {
     await this.listLogging('SR607E21-2019-07-11-SR607E21-20190711_115549');
    /*  this.attachments=this.recording.attachments.items;
     this.recordingUrls=this.recording.recordingUrls.items; */
     /* var attachment= {
      "description": "Car rental agreement 2",
      "id": "3",
      "url": "https://david-horn-recording.s3.amazonaws.com/wireframe-1.jpg",
      "viqRecordingAttachmentViqRecordingId": this.recording.id
    };
    await this.addAttachment(attachment); */
  }
   async getRecording(id){
    this.recording= await this.api.GetViqRecording(id);
  }
  async addAttachment(attachment){
    
    await this.api.CreateViqRecordingAttachment(attachment)
  }
  async listLogging(id){
    //the id is the recording Id
    var filter: ModelViqRecordingLogFilterInput={viqRecordingLogViqRecordingId:{eq:id}};
  // the number is how many records will be in the output
    this.logs= await this.api.ListViqRecordingLogs(filter,11)
    
    var filter1: ModelViqRecordingAttachmentFilterInput={viqRecordingAttachmentViqRecordingId:{eq:id}};
    var attachments= await this.api.ListViqRecordingAttachments(filter1,200);
    
    var filter2: ModelViqRecordingUrlFilterInput={viqRecordingUrlViqRecordingId:{eq:id}};
    var Urls=await this.api.ListViqRecordingUrls(filter2);

    var urlId='b23e94d0-a97e-11e9-9a0c-bb5a0e31da05';
    var filter3: ModelViqRecordingRedactionFilterInput={viqRecordingRedactionViqRecordingUrlId:{eq:urlId}};
    var redactions=await this.api.ListViqRecordingRedactions(filter3);

    var filter4: ModelViqRecordingTranscriptionFilterInput={viqRecordingTranscriptionViqRecordingId:{eq:id}};
    var transcriptions=await this.api.ListViqRecordingTranscriptions(filter4);

    id="SR607E21-20190723_150855";
    var filter5: ModelViqRecordingSharedFilterInput={viqRecordingSharedViqRecordingId:{eq:id}};
    var shareds=await this.api.ListViqRecordingShareds(filter5);

    var abc="";
  }
  
 
}
