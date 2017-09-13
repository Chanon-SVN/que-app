import { Component } from '@angular/core';
import { RestHandlerService } from '../services/resthandler.service';


@Component({
  templateUrl: './home.component.html',
  providers: [RestHandlerService],
  styleUrls : ["./home.component.css"]
})

export class HomeComponent  {
  public queue:Array<any>;
  public name:string;
  public topic:string;
  public time:string;
  public duration:string;

  constructor(private resthandler: RestHandlerService) {
    this.queue = [];

    this.resthandler.getData('/ques')
    .subscribe(res=>{
      this.queue = res;
    })
  } 

  addQueue() {
    let que = {
      name:this.name,
      topic:this.topic,
      time:this.time,
      duration:this.duration
    }

    this.resthandler.postData(que, '/create-que')
    .subscribe(res=>{
      console.log(res); 
    })

    this.queue.push(que);
  }
}
