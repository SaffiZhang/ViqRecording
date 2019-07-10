import { Component, OnInit } from '@angular/core';
import { APIService} from'../API.service';
import {UpdateViqRecordingInput} from'../API.service';
import {GetViqRecordingQuery} from'../API.service';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss']
})
export class RecordingComponent implements OnInit {
  updateRecordingInput:any;
  recording={Id:'0',annotations:[]};
  
  constructor(private api:APIService) { }
  
  async ngOnInit() {
     this.recording=await this.getRecording('2');
     this.assignUpdateInput();
     let result =await this.updateRecording(this.updateRecordingInput);
  
     
  }
   async updateRecording(recording){
     try{
      let result= await this.api.UpdateViqRecording(recording)
     }catch(e){
       console.log(e);
     }
    
  }
  async getRecording(id){
    return await this.api.GetViqRecording(id);
  }
  assignUpdateInput()
  {
    this.updateRecordingInput={
      Id: '2',
      interviewee:'Tom Cruise',
      recordings: [
        {
          "lastModified": "Jul 4, 2019 2:53:16 PM GMT-0400",
          "url": "https://viq-recording.s3.amazonaws.com/SR607E21/2019/06/28/SR607E21-20190628_181526-audio_P1-1.mp3"
        }
      ]
    }
  }
  getAnnotation(annotationPromise)
  {
    var annotation={annotationTime:'',text:''};
    annotation.annotationTime=annotationPromise.annotationTime;
    annotation.text=annotationPromise.text;
    return annotation;
  }
}
