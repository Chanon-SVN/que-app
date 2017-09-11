import { Component } from '@angular/core';
import { RestHandlerService } from '../services/resthandler.service';


@Component({
  templateUrl: './home.component.html',
  providers: [RestHandlerService]
})

export class HomeComponent  {

  constructor(private resthandler: RestHandlerService) {
  //  let token = localStorage.getItem('token');

  //  this.resthandler.postData({jwt:token}, '/user')
  //  .subscribe(res => {
  //  })
  } 
}
