import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInMode:boolean=true;
  widthImgShow:boolean=true;
  signInForm:FormGroup=new FormGroup({
    'account':new FormGroup({
      'username':new FormControl(null,[Validators.required]),
      'password':new FormControl(null,[Validators.required])
    })
  });
  signUpForm:FormGroup=new FormGroup({
      'userDetail':new FormGroup({
        'emailOrMob':new FormControl(null,[Validators.required]),
        'name':new FormControl(null,[Validators.required])
      }),
      'account':new FormGroup({
        'username':new FormControl(null,[Validators.required]),
        'password':new FormControl(null,[Validators.required])
      })
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.signInMode){
      if(this.signInForm.valid){
        console.log('valide pass')
      }
      else{
        return
      }
    }
    else{
      if(this.signUpForm.valid){
        console.log('valide sign up pass')
      }
      else{
        return
      }
    }
  }
  onChangeMode(){
    this.signInMode=!this.signInMode
  }

}
