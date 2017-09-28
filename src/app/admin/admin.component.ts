import { Component, OnInit } from '@angular/core';
import { RestHandlerService } from '../services/resthandler.service';
declare let $:any

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [RestHandlerService]
})
export class AdminComponent implements OnInit {

  public queues:Array<any>;

  constructor(private resthandler:RestHandlerService) { 
    this.resthandler.getData('/ques')
    .subscribe(res=>{
      this.queues = res;
    })
  }

  ngOnInit() {
  }

  delete(index){
    console.log('Index', index);
    return this.resthandler.postData(this.queues[index], '/delete-que').subscribe(res=>{
      console.log(res);
      this.queues.splice(index,1);
      $("#delete"+index).modal("hide")
    });
  }
}
