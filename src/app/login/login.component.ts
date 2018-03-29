import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(val) {
    console.log(val);
    this.authService.login(val.login.userName, val.login.password);
  }
}
