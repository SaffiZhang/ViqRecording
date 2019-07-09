import { Component, OnInit } from '@angular/core';
import { APIService} from'../API.service';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss']
})
export class RecordingComponent implements OnInit {
  recording= {"recordingUrl" :"",Id:"0"};
  constructor(private api:APIService) { }

  async ngOnInit() {
     this.recording=await this.getRecording('11111');
    
     
  }
   async updateRecording(recording){
    let result= await this.api.UpdateViqRecording(recording)
  }
  async getRecording(id){
    return await this.api.GetViqRecording(id);
  }
}
