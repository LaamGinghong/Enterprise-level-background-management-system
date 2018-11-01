import {Directive, HostListener, Input} from '@angular/core';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

@Directive({
  selector: '[appLogin]'
})
export class LoginDirective {
  @Input() userName: string;

  constructor(
    private router: Router,
    private message: NzMessageService
  ) {
  }

  @HostListener('document:keydown', ['$event'])
  onKey($event: KeyboardEvent): void {
    if ($event.key === 'Enter') {
      this.login();
    }
  }

  @HostListener('click', ['$event'])
  login() {
    if (this.userName) {
      const date = new Date();
      date.setTime(date.getTime() + 10 * 24 * 60 * 60 * 1000);
      document.cookie = `username=${this.userName};expires=${date};path=/`;
      this.router.navigate(['/pages/content']);
    } else {
      this.message.remove();
      this.message.error('请输入账号密码！', {nzDuration: 2000});
    }
  }
}
