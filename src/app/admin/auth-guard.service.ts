import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router:Router) {

  }

  canActivate() {
    let token = localStorage.getItem('token');

    if(token){
      return true;
    }else {
      this.router.navigate(['']);

      return false;
    }
  }
}
