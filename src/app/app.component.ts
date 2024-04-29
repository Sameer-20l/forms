import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
  userLogin(item:any){
    console.log(item);
  }

  loginForm=new FormGroup({
    user :new FormControl(""),
    password : new FormControl("")
  })
  loginUser(){
    console.log(this.loginForm.value);
  }
}
