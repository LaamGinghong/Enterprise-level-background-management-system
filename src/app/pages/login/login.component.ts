import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  time = 10;
  default = '获取验证码';
  Mode = 'password';
  checked = false;
  inputValue: string;

  constructor(private message: NzMessageService) {
  }

  ngOnInit() {
  }

  getMessage() {
    const countDown = setInterval(() => {
      this.time--;
      if (this.time === 0) {
        clearInterval(countDown);
        this.time = 10;
      }
    }, 1000);
  }

  fake() {
    this.message.remove();
    this.message.error('这些都是骗人的', {nzDuration: 2000});
  }
}
