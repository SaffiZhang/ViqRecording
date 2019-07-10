import { Component, OnInit } from '@angular/core';
import { APIService} from'../API.service';
import {UpdateViqRecordingInput} from'../API.service';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss']
})
export class RecordingComponent implements OnInit {
  updateRecordingInput:UpdateViqRecordingInput;
  recording={recordings:[{url:"",lastModified:""}], annotations:[]};
  
  constructor(private api:APIService) { }
  
  async ngOnInit() {
     this.recording=await this.getRecording('11111');
     this.updateRecordingInput=Object.assign(this.recording);
     this.updateRecordingInput.annotations.push(
      {
        "annotationTime": "2019-06-20 18:17:38",
        "text": "add new annotation"
      });
    /*   await this.updateRecording(this.updateRecordingInput);  */
  
     
  }
   async updateRecording(recording){
    let result= await this.api.UpdateViqRecording(recording)
  }
  async getRecording(id){
    return await this.api.GetViqRecording(id);
  }
}
