import { Component } from '@angular/core';
import { RestHandlerService } from './services/resthandler.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare let $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RestHandlerService]
})

export class AppComponent {

  public username:string;
  public password:string;
  public display:string;
  public loggedIn:boolean;
  public errorMessage:string;
  
  constructor(private resthandler: RestHandlerService, private router:Router){
    this.username = '';
    this.password = '';
    this.display = '';
    this.errorMessage = '';
   //CHECK LOCAL TOKEN IF TOKEN => GO TO ADMIN PAGE
    let token = localStorage.getItem('token');
    if(token){
      this.loggedIn = true;
      this.display = localStorage.getItem('display');
    }else{
      this.loggedIn = false;
    }
  }

  logout(){
    localStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['/']);
  }

  login(){
    if(!this.username || !this.password) {
     this.errorMessage = 'Please fill username or/and password to login.';
     $('#errLogin').modal('show'); 
    }else{
      let credential = {
        username : this.username,
        password : this.password
      }

      this.resthandler.postData(credential, '/login')
      .subscribe(res=>{
        if(res.success){
          console.log('login success : ', res);

          this.display = res.username;
          this.loggedIn = true;

          localStorage.setItem('token', res.token);
          localStorage.setItem('display', res.username);

          this.router.navigate(['/admin']);
        }else{
          console.log('login fail : ', res);
          this.errorMessage = 'Incorrect username or password.';
          $('#errLogin').modal('show'); 
        }
      })
    }
  }
}
