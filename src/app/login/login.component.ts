import { Component, inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj:any = {
    "EmailId": "",
    "Password": ""
  }

  userService = inject(UserService);
  router = inject(Router)

  login() {
  debugger;
  this.userService.onLogin(this.loginObj).subscribe((res:any)=>{
    debugger;
    if(res.result) {
      localStorage.setItem("userApp",JSON.stringify(res.data));
      this.router.navigateByUrl("dashboard-student");
    } else {
      alert(res.message)
    }
})
}
}