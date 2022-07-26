import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signupform!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupform=this.formBuilder.group({
      Name:[''],
      UserName:[''],
      Email:[''],
      Role:[''],
      Mobile:[''],
      Company:[''],
      Password:[''],
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupform.value).subscribe(res=>{
      alert("SignUP Successfull");
      this.signupform.reset();
      this.router.navigate(['login']);
     },error=>{
      alert("Something went wrong");
     }
    );
  }
}
