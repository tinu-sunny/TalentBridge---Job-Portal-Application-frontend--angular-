

import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  
  req:boolean=false
  btnclickreg(){
    this.req=true
  }

  btnclicklog(){
        this.req=false

  }
}
