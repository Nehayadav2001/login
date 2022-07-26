import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from "@angular/forms"
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
      UserName:[''],
      Password:['']
    });
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers").subscribe(res=>{
       const user=res.find((a:any)=>{
        return a.UserName===this.loginform.value.UserName && a.Password===this.loginform.value.Password
       });
       if(user){
        alert("Login is Succesfull");
        this.loginform.reset();
        this.router.navigate(['/home'])
       }else{
        alert("User Not Found");
       }
    },error=>{
      alert("Something Went Wrong");
    })
  }

}
