import { Component, OnInit } from '@angular/core';
import { APIService} from'../API.service';
import  { ModelLogFilterInput}from'../API.service';
import  { ModelAttachmentFilterInput}from'../API.service';
import  { ModelRecordingFilterInput}from'../API.service';
import  { ModelTranscriptionFilterInput}from'../API.service';
import  { ModelRedactionFilterInput}from'../API.service';
import  { ModelSharedFilterInput }from'../API.service';
import  { ModelCaseFilterInput }from'../API.service';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss']
})
export class RecordingComponent implements OnInit {
  recording:any={
    "id": "SR607E21-20190723_145393",
    "interviewee": "Tom Cruise",
    "interviewFinish": "2019-07-23 14:57:12",
    "interviewStart": "2019-07-23 14:55:40",
    "location": "Gold Coast police station 12",
    "officerCollarNumber": "1234",
    "path": "SR607E21/2019/07/23/",
    "unitId": "SR607E21"
  };
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
    let result =await this.addRecording(this.recording);
    console.log(result);
  }
   async getRecording(id){
    
    this.recording= await this.api.GetRecording(id);
  }
  async addRecording(recording){
    try{
      return  await this.api.CreateRecording(recording);
    }catch(err){
      console.log(err);
    }
    
  }
  async addAttachment(attachment){
    
    await this.api.CreateAttachment(attachment)
  }
  async listLogging(id){
    //the id is the recording Id
    var filter: ModelLogFilterInput={logCaseId:{eq:id}};
  // the number is how many records will be in the output
    this.logs= await this.api.ListLogs(filter,11)
    
    var filter1: ModelAttachmentFilterInput={attachmentCaseId:{eq:id}};
    var attachments= await this.api.ListAttachments(filter1,200);
    
    var filter2: ModelRecordingFilterInput={recordingCaseId:{eq:id}};
    var Urls=await this.api.ListRecordings(filter2);

    var urlId='b23e94d0-a97e-11e9-9a0c-bb5a0e31da05';
    var filter3: ModelRedactionFilterInput={redactionRecordingId:{eq:urlId}};
    var redactions=await this.api.ListRedactions(filter3);

    var filter4: ModelTranscriptionFilterInput={transcriptionCaseId:{eq:id}};
    var transcriptions=await this.api.ListTranscriptions(filter4);

    id="SR607E21-20190723_150855";
    var filter5: ModelSharedFilterInput={sharedCaseId:{eq:id}};
    var shareds=await this.api.ListShareds(filter5);

    var interviewStart='2019-7-1';
    var interviewFinish='2019-9-1';
    var location="Gold Coast police station 12";
    var officerCollarNumber="1234";
    var interviewee="Donald Trump";
    
    var filter6: ModelCaseFilterInput={interviewStart: {ge:interviewStart}, 
                            interviewFinish:{le:interviewFinish},
                            location:{beginsWith:location},
                            officerCollarNumber:{beginsWith:officerCollarNumber}, 
                            interviewee:{beginsWith:interviewee}};
    var recordings=await this.api.ListRecordings(filter6,200);
    var abc="";
  }
  
 
}
