import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  login(userName: string, password: string): boolean {
    if (userName === 'admin') {
      console.log('登录成功');
      return true;
    } else {
      console.log('登录失败');
      return false;
    }
  }
}
