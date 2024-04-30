import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
  userLogin(item:any){
    console.log(item);
  }

  loginForm=new FormGroup({
    user :new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("")
  })
  loginUser(){
    console.log(this.loginForm.value);
  }
  get user(){
    return this.loginForm.get('user');
  }
}
