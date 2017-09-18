import { Component } from '@angular/core';
import { RestHandlerService } from '../services/resthandler.service';
import { Router }  from '@angular/router';

declare let $:any;


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

  constructor(private resthandler: RestHandlerService, private router:Router) {
    this.queue = [];

    this.resthandler.getData('/ques')
    .subscribe(res=>{
      this.queue = res;
    })
  } 

  addQueue() {
    if(this.name && this.topic && this.time && this.duration){
      let que = {
        name:this.name,
        topic:this.topic,
        time:this.time,
        duration:this.duration
      }

      this.resthandler.postData(que, '/create-que')
      .subscribe(res=>{
        this.name = '';
        this.topic = '';
        this.time = '';
        this.duration = '';

        $('#success').modal('show')
      })

      this.queue.push(que);
    }else{
      $('#requiredfield').modal('show') 
    }

  }
}
